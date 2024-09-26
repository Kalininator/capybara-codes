import fs from 'fs'
import YAML from 'yaml'

export type Status = {
  code: number;
  message: string;
};

let s: { [k: string]: Status } = {}

const yaml = YAML.parse(fs.readFileSync('statuses.yaml', 'utf8'))
yaml.statuses.forEach((status: Status) => {
  s[status.code] = status;
});

export const statuses = s;
