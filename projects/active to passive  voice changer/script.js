function isPassive(sentence) {
    return sentence.includes("was") || sentence.includes("by");
}

function validateSentence(words) {
    if (words.length < 3) {
        return "The sentence is too short. Please ensure it has a subject, verb, and object.";
    }
    return "";
}

function convertToPassive() {
    const sentence = document.getElementById("sentenceInput").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    error.textContent = "";  // Clear previous errors

    if (isPassive(sentence)) {
        result.textContent = "This sentence is already in passive voice.";
        return;
    }

    const words = sentence.split(" ");
    const validationError = validateSentence(words);
    if (validationError) {
        error.textContent = validationError;
        return;
    }

    const subject = words[0];
    const verb = words[1];
    const object = words.slice(2).join(" ");
    const passiveSentence = `${object} was ${verb} by ${subject}.`;

    result.textContent = "Passive Voice: " + passiveSentence;
}

function convertToActive() {
    const sentence = document.getElementById("sentenceInput").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    error.textContent = "";  // Clear previous errors

    if (!isPassive(sentence)) {
        result.textContent = "This sentence is already in active voice.";
        return;
    }

    const words = sentence.split(" ");
    const validationError = validateSentence(words);
    if (validationError) {
        error.textContent = validationError;
        return;
    }

    const object = words[0];
    const verb = words[2];
    const subject = words.slice(4).join(" ");
    const activeSentence = `${subject} ${verb} ${object}.`;

    result.textContent = "Active Voice: " + activeSentence;
}
