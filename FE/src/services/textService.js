const textService = {

	convertCase: (option, text) => {
		switch (option) {
			case "lower":
				return textService.convertToLowerCase(text);
			case "upper":
				return textService.convertToUpperCase(text);
			case "sentence":
				return textService.convertToSentenceCase(text);

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
		}
		return arr.join("");
	},

	isAlphabet: (c) => {
		const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		return c.length == 1 && alphabets.includes(c)
	}

}

export default textService;
