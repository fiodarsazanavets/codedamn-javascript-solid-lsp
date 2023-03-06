class TextProcessorInterface {

    convertText(inputText) {
        throw 'This method needs to be overridden.';
    }
	
	convertMdText(inputText) {
        throw 'This method needs to be overridden.';
    }
}

module.exports = TextProcessorInterface;