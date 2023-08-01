module.exports.rules = {
    'newline-imports': {
        meta: {
            type: "layout",
            docs: {
                description: "enforce a newline for each property in a multiline import statement",
                category: "Stylistic Issues",
                recommended: false,
            },
            schema: [
                {
                    "type": "object",
                    "properties": {
                        "maxPropertiesOnSingleLine": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    "additionalProperties": false
                }
            ],
        },
        create: function (context) {
            const maxPropertiesOnSingleLine = context.options[0]?.maxPropertiesOnSingleLine || 1;

            return {
                ImportDeclaration: function (node) {
                    let prevLineNum = null;
                    let propertiesOnSingleLine = 0;

                    for (let i = 0; i < node.specifiers.length; i++) {
                        const specifier = node.specifiers[i];
                        const lineNum = specifier.loc.start.line;

                        if (prevLineNum !== null && lineNum === prevLineNum) {
                            propertiesOnSingleLine++;
                            if (propertiesOnSingleLine > maxPropertiesOnSingleLine) {
                                context.report({
                                    node: node,
                                    message: 'Each imported property should be on a new line',
                                });
                                break;
                            }
                        } else {
                            propertiesOnSingleLine = 1;
                        }

                        prevLineNum = lineNum;
                    }
                },
            };
        },

    }
}