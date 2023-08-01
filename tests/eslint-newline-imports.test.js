// Import necessary modules
const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/eslint-newline-imports');

// Initialize RuleTester
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
});

// Run tests
ruleTester.run('eslint-newline-imports', rule, {
    valid: [
        `import { useState } from 'react';`,
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
            code: `import { useState, useEffect } from 'react';`,
            errors: [{ message: 'Each imported property should be on a new line' }],
        },
        {
            code: `import React, {
                useState, useEffect, FC,
            } from 'react';`,
            errors: [{ message: 'Each imported property should be on a new line' }],
        },
    ],
});
