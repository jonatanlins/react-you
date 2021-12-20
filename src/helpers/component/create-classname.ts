import cn from "classnames";

import { composeName } from "../text/compose-name";

const classnamePrefix = "ryou";

export const createClassname = (
  name: string,
  properties: Record<string, string | boolean>,
  customClassname?: string
): string => {
  const propertiesClassnames = Object.entries(properties).map(
    ([key, value]) => {
      if (typeof value === "boolean") {
        if (!value) return "";
        return composeName(classnamePrefix, name, key);
      }
      return composeName(classnamePrefix, name, key, value);
    }
  );

  return cn(
    composeName(classnamePrefix, name),
    propertiesClassnames,
    customClassname
  );
};
