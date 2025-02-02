const textService = {

	convertCase: (option, text) => {
		switch (option) {
			case "lower":
				return textService.convertToLowerCase(text);
			case "upper":
				return textService.convertToUpperCase(text);
			case "sentence":
				return textService.convertToSentenceCase(text);
			case "capitalize":
				return textService.convertToCapitalizeCase(text);
			case "alternating":
				return textService.convertToAlternatingCase(text);
			case "inverse":
				return textService.convertToInverseCase(text);
		}
	},

	convertToLowerCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string");
		}
		return text.toLowerCase();
	},

	convertToUpperCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string");
		}
		return text.toUpperCase();
	},

	convertToSentenceCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string");
		}
		let arr = text.split("");
		let isDot = true;
		for (let i = 0; i < arr.length; i++) {
			if (isDot && textService.isAlphabet(arr[i])) {
				arr[i] = arr[i].toUpperCase();
				isDot = false;
			}
			else if (arr[i] == '.') {
				isDot = true;
			}
			else if (arr[i] != ' ') {
				isDot = false;
			}
		}
		return arr.join("");
	},

	convertToCapitalizeCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string");
		}
		let arr = text.split("")
		let isSpace = true;
		for (let i = 0; i < arr.length; i++) {
			if (isSpace && textService.isAlphabet(arr[i])) {
				arr[i] = arr[i].toUpperCase();
				isSpace = false
			}
			else if (arr[i] == ' ') {
				isSpace = true
			}
			else {
				isSpace = false
			}

		}
		return arr.join("")

	},

	convertToAlternatingCase: (text) => {
		if (typeof text != 'string') {
			throw new Error('Input must be string')
		}
		let prevLarge = false
		let arr = text.split('')
		for (let i = 0; i < arr.length; i++) {
			if (textService.isAlphabet(arr[i])) {
				arr[i] = prevLarge ? arr[i].toLowerCase() : arr[i].toUpperCase()
				prevLarge = !prevLarge
			}
		}
		return arr.join("")
	},

	convertToInverseCase: (text) => {
		if (typeof text != 'string') {
			throw new Error('Input must be string')
		}
		let prevLarge = true
		let arr = text.split('')
		for (let i = 0; i < arr.length; i++) {
			if (textService.isAlphabet(arr[i])) {
				arr[i] = prevLarge ? arr[i].toLowerCase() : arr[i].toUpperCase()
				prevLarge = !prevLarge
			}
		}
		return arr.join("")
	},


	isAlphabet: (c) => {
		const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		return c.length == 1 && alphabets.includes(c)
	}

}

export default textService;
