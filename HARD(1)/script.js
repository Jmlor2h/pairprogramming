bracketChecker = (x) => {
    const brackets = ["{}", "[]", "()"];
    brackets.forEach((e) =>
        e === `${x.slice(0,1)}${x.slice(-1)}` ? console.log(true) : console.log(false)
    );
}

bracketChecker("{Hello}")
bracketChecker("[Hello]")
bracketChecker("[Hello)")