function triangle(value1, type1, value2, type2) {
    
    console.log("Інструкція з використання функції triangle(value1, type1, value2, type2):");
    console.log(" - value1 та value2: значення елементів трикутника");
    console.log(" - type1 та type2: типи елементів (leg, hypotenuse, adjacent angle, opposite angle, angle)");
    console.log("Доступні типи: leg (катет), hypotenuse (гіпотенуза), adjacent angle (прилеглий кут), opposite angle (протилежний кут), angle (гострий кут).");
    console.log("Приклади: triangle(4, 'leg', 8, 'hypotenuse'), triangle(60, 'opposite angle', 5, 'leg').");

    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const toDegrees = (radians) => (radians * 180) / Math.PI;

    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "Zero or negative input";
    }

    let a, b, c, alpha, beta;

    
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = toDegrees(Math.atan(b / a));
    } else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        if (type1 === "leg") {
            a = value1;
            c = value2;
        } else {
            a = value2;
            c = value1;
        }
        if (a >= c) {
            console.log("Leg cannot be greater than or equal to hypotenuse");
            return "Leg cannot be greater than or equal to hypotenuse";
        }
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = toDegrees(Math.atan(b / a));
    } else if ((type1 === "opposite angle" && type2 === "leg") || (type1 === "leg" && type2 === "opposite angle")) {
        if (type1 === "opposite angle") {
            alpha = value1;
            a = value2;
        } else {
            alpha = value2;
            a = value1;
        }
        if (alpha <= 0 || alpha >= 90) {
            console.log("Invalid angle");
            return "Invalid angle";
        }
        alpha = toRadians(alpha);
        b = a / Math.tan(alpha);
        c = Math.sqrt(a ** 2 + b ** 2);
        beta = toDegrees(Math.atan(b / a));
    } else if ((type1 === "angle" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "angle")) {
        if (type1 === "angle") {
            alpha = value1;
            c = value2;
        } else {
            alpha = value2;
            c = value1;
        }
        if (alpha <= 0 || alpha >= 90) {
            console.log("Invalid angle");
            return "Invalid angle";
        }
        alpha = toRadians(alpha);
        a = Math.sin(alpha) * c;
        b = Math.cos(alpha) * c;
        beta = toDegrees(Math.atan(b / a));
    } else {
        console.log("Invalid types. Please check the instructions.");
        return "failed";
    }

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);
    
    console.log(triangle(7, "leg", 18, "hypotenuse"));
    console.log(triangle(60, "opposite angle", 5, "leg"));
    console.log(triangle(43.13, "angle", -2, "hypotenuse"));
    return "success";
}
