const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/eslint-newline-imports');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
});

ruleTester.run('eslint-newline-imports', rule, {
    valid: [
        {
            code: `import { useState, useEffect } from 'react';`,
            options: [{ "maxPropertiesOnSingleLine": 2 }],
        },
        {
            code: `import React, {
                useState, useEffect, FC,
            } from 'react';`,
            options: [{ "maxPropertiesOnSingleLine": 3 }],
        },
        `import {
            useState,
            useEffect
        } from 'react';`,
        `import React, {
            useState,
            useEffect,
            FC,
        } from 'react';`
    ],
    invalid: [
        {
            code: `import { useState, useEffect, useRef } from 'react';`,
            options: [{ "maxPropertiesOnSingleLine": 2 }],
            errors: [{ message: 'Each imported property should be on a new line' }],
        },
        {
            code: `import React, {
                useState, useEffect, FC, useRef,
            } from 'react';`,
            options: [{ "maxPropertiesOnSingleLine": 3 }],
            errors: [{ message: 'Each imported property should be on a new line' }],
        },
    ],
});
