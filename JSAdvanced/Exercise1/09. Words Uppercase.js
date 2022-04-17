function input(question) {
    console.log(question.match(/\w+/g).join(", ").toUpperCase());
}


input('Hi, how are you?');
input('hello');
input('Functions in JS can be nested, i.e. hold other functions')