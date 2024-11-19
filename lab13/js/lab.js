/*
    lab.js - Lab 13: Loops
    Requirements: Add configurable max number and factors for FizzBuzz.
    Authors: Keith Tran & Josh Chow
    Date: 11/18/24
*/

const DEFAULT_MAX = 100;
const DEFAULT_FACTORS = [
    { factor: 3, text: "Fizz" },
    { factor: 4, text: "Buzz" },
    { factor: 5, text: "Boom" },
    { factor: 7, text: "Bang" }
];

function FizzBuzz() {
    const max = parseInt($("#maxNumber").val()) || DEFAULT_MAX;

    const factors = [];
    $(".factor-row").each(function () {
        const factor = parseInt($(this).find(".factor").val());
        const text = $(this).find(".text").val();
        if (factor && text) {
            factors.push({ factor, text });
        }
    });

    let outputHTML = "<div class='output-columns'>";
    for (let i = 1; i <= max; i++) {
        let str = i + " - ";
        let words = "";

        factors.forEach(({ factor, text }) => {
            if (i % factor === 0) {
                words += text;
            }
        });

        if (words) {
            str += words + "!";
        }

        outputHTML += `<div>${str}</div>`;
    }
    outputHTML += "</div>";

    $("#output").html(outputHTML);
}

function addFactorRow() {
    $("#factors").append(`
        <div class="factor-row">
            <input type="number" class="factor" placeholder="Factor (e.g., 3)" />
            <input type="text" class="text" placeholder="Text (e.g., Fizz)" />
        </div>
    `);
}

$(document).ready(function () {
    $("#maxNumber").val(DEFAULT_MAX);
    DEFAULT_FACTORS.forEach(({ factor, text }) => {
        addFactorRow();
        const lastRow = $(".factor-row").last();
        lastRow.find(".factor").val(factor);
        lastRow.find(".text").val(text);
    });

    $("#runButton").click(FizzBuzz);
    $("#addFactorButton").click(addFactorRow);
});
