/// <reference path="../typings/jquery/jquery.d.ts" />
module Training {
    export class Person {
        age:number;
        name:string;
    }

    export class Question {
        first:number;
        second:number;

        constructor(a: number, b: number){
            this.first = a;
            this.second = b;
        }

        getAnswer():number {
            return this.first - this.second;
        }

        format():string {
            return this.first + " - " + this.second + " =";
        }
    }
}

module View {
    export class QuestionView {
        field:JQuery;
        answer:JQuery;
        question:Training.Question;

        constructor(selector:string, question:Training.Question){
            this.field = $(selector);
            this.question = question;
            this.answer = this.field.children('input.answer');

            this.render();
        }

        private render():void {
            this.field.children('span.question').text(this.question.format());
        }

        respond():void {
            var received:number = this.answer.val();
            var expected:number = this.question.getAnswer();

            if(received - expected === 0){
                setTimeout( () => alert("good! :)"), 10);
                this.answer.css('background-color', 'white');
            } else {
                setTimeout( () => alert("bad!!! :-("), 10);
                this.answer.css('background-color', 'red');
            }
        }
    }
}

// Main Procedure

var ore:Training.Person = {
        age: 26,
        name: "Takuya Murakami"
};

var question:Training.Question = new Training.Question(33, 4);

var field:View.QuestionView = new View.QuestionView('div.training', question);

$('button.submit').on('click', () => field.respond());
