const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/questions', (req, res) => res.json({
    "questions" : [{
        "question": "Anarchy is:",
        "choices": {
            "a": "a system of government where a single individual rules",
            "b": "a system of government where a small group of individuals are the rulers",
            "c": "a system of government where the people in general rule over themselves",
            "d": "none of the above"
        },
        "answerKey": "e"
    },

        {
            "question": "According to anti-federalist 'An Old Whig,' the Constitution gives the national government too much power over states because:",
            "choices": {
                "a": "the national government was given the power to replace any state governments it declares are 'unrepublican'",
                "b": "there will be far more national voters than state voters, and national voters will support the national government over the states",
                "c": "there is practically no limit to the power of the national government to make any laws it wants to",
                "d": " although the states can vote to 'nullify' federal laws, Congress can override that nullification by a mere 2/3 vote"
            },
            "answerKey": "c"
        },

        {
            "question": "The Supreme Court case of Brown v. Board of Education declared that separate public schools for black and white children are:",
            "choices": {
                "a": "permissible as long as the schools are “equal” in funding, facilities, and other measurable qualities",
                "b": "permissible unless students or parents at those schools objected",
                "c": "impermissible",
                "d": "impermissible in elementary/high schools but were permissible in college"
            },
            "answerKey": "c"
        }

    ],

    "selectedAnswers": [],
    "score": 0,
    "progressCounter": 0
}));

app.listen(3001, () => console.log('Server Listening On 3001'));