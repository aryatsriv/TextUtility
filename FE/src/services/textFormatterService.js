const textModifierService = {
	textModifier: (option, text) => {
		switch (option) {
			case "bold":
				return textModifierService.convertTextToBold(text)
			case "italic":
				return textModifierService.convertTextToItalic(text)
			case "underline":
				return textModifierService.convertTextToUnderline(text)
			case "break":
				return;
		}
	},
	convertTextToBold: (text) => {
		return '<b>' + text + '</b>';
	},

	convertTextToItalic: (text) => {
		return '<i>' + text + '</i>';
	},


	convertTextToUnderline: (text) => {
		return '<u>' + text + '</u>';
	}
}


export default textModifierService;
