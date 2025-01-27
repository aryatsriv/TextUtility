const textService = {

	convertCase: (option, text) => {
		switch (option) {
			case "lower":
				return textService.convertToLowerCase(text)
			case "upper":
				return textService.convertToUpperCase(text)

		}
	},

	convertToLowerCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string")
		}
		return text.toLowerCase();
	},

	convertToUpperCase: (text) => {
		if (typeof text != 'string') {
			throw new Error("Input must be string")
		}
		return text.toUpperCase();
	}


}

export default textService;
