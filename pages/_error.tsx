function Error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  // const statusCode = res ? res.statusCode : err ? err.statusCode : 200;
  return { statusCode: 200 };
};

export default Error;
