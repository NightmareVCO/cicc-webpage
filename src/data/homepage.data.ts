import {
  directives,
  directivesImages,
  DirectiveYearEnum,
} from "@data/directives.data";

const CURRENT_YEAR = new Date().getFullYear().toString();
const PREVIOUS_YEAR = (new Date().getFullYear() - 1).toString();

export const directive =
  directives[CURRENT_YEAR as DirectiveYearEnum] ??
  directives[PREVIOUS_YEAR as DirectiveYearEnum];

export const image =
  directivesImages[CURRENT_YEAR as DirectiveYearEnum] ??
  directivesImages[PREVIOUS_YEAR as DirectiveYearEnum];