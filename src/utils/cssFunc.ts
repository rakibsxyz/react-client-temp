type TCSSComponseParam = {
  if: boolean;
  then: string;
};

class UtilCSSImpl {
  ComponseClasses(classes: TCSSComponseParam[]): string {
    return classes
      .filter((c) => c.if)
      .map((c) => c.then)
      .join(" ");
  }
}

export const UtilCSS = new UtilCSSImpl();
