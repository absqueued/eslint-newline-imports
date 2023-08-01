module.exports = {
    create: function (context) {
        return {
            // Check each import declaration in the file
            ImportDeclaration: function (node) {
                let prevLineNum = null;

                // Iterate through each property (specifier) being imported
                for (let i = 0; i < node.specifiers.length; i++) {
                    const specifier = node.specifiers[i];
                    const lineNum = specifier.loc.start.line;

                    // If the current property is on the same line as the previous one, report an error
                    if (prevLineNum !== null && lineNum === prevLineNum) {
                        context.report({
                            node: node,
                            message: 'Each imported property should be on a new line',
                        });
                        break;
                    }

                    // Remember the line number of the current property to compare with the next one
                    prevLineNum = lineNum;
                }
            },
        };
    },
};
