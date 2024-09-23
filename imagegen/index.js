const Jimp = require('jimp')
const fs = require('fs');
const yaml = require('js-yaml');

async function generateCenteredAndScaledImageWithText(inputImagePath, outputImagePath, backgroundColor, outputWidth, outputHeight, maxWidthPercent, maxHeightPercent, text1, text2, text3 = 'foobar') {
	try {
		// Load the input image
		const inputImage = await Jimp.read(inputImagePath);

		// Calculate the maximum dimensions based on the percentage
		const maxWidth = Math.floor(outputWidth * (maxWidthPercent / 100));
		const maxHeight = Math.floor(outputHeight * (maxHeightPercent / 100));

		// Scale the input image to fit inside the maximum dimensions
		inputImage.scaleToFit(maxWidth, maxHeight);

		// Create a new image with specified background color and dimensions
		const outputImage = new Jimp(outputWidth, outputHeight, backgroundColor);

		// Calculate the position to center the input image
		const x = Math.floor((outputWidth - inputImage.bitmap.width) / 2);
		const y = Math.floor((outputHeight - inputImage.bitmap.height) / 2) - (outputHeight * 0.1);

		// Composite the input image onto the output image
		outputImage.composite(inputImage, x, y);

		// Add text lines below the image
		const font1 = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
		const font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

		// Calculate text position for the first line
		const textX1 = Math.floor((outputWidth - Jimp.measureText(font1, text1)) / 2);
		const textY1 = y + inputImage.bitmap.height + 20;

		// Calculate text position for the second line
		const textX2 = Math.floor((outputWidth - Jimp.measureText(font2, text2)) / 2);
		const textY2 = textY1 + 10 + 64;

		const font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
		const textX3 = outputWidth - (Jimp.measureText(font3, text3) + 10);
		const textY3 = 10

		// Print both lines of text
		outputImage.print(font1, textX1, textY1, text1);
		outputImage.print(font2, textX2, textY2, text2);
		outputImage.print(font3, textX3, textY3, text3);

		// Save the output image
		await outputImage.writeAsync(outputImagePath);
		outputImage.scale(0.5);
		await outputImage.writeAsync('output2x.png')
		console.log(`Image saved to ${outputImagePath}`);
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

const data = fs.readFileSync('statuses.yaml', 'utf8');
const statuses = yaml.load(data).statuses;

// Example usage
const backgroundColor = 0x000000FF; // Black background
const outputWidth = 800; // Replace with your desired output image width
const outputHeight = 700; // Replace with your desired output image height
const maxWidthPercent = 90; // Maximum width as a percentage of output width
const maxHeightPercent = 65; // Maximum height as a percentage of output height

statuses.forEach(status => {
	const inputImagePath = `images/${status.code}.png`; // Replace with your input image path
	const outputImagePath = `../public/${status.code}.jpg`; // Replace with your desired output image path
	const text1 = status.code.toString();
	const text2 = status.message;
	const text3 = `capy.codes/${status.code}`;
	generateCenteredAndScaledImageWithText(inputImagePath, outputImagePath, backgroundColor, outputWidth, outputHeight, maxWidthPercent, maxHeightPercent, text1, text2, text3);
	console.log(`Generated image for status ${status.code}`);
})
