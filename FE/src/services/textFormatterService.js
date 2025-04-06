const textModifierService = {
	textModifier: (option, text) => {
		switch (option) {
			case "bold":
				return textModifierService.convertTextToBold(text)
			case "break":
				return;
		}
	},
	convertTextToBold: (text) => {
		return text + "bold";
	}
}

export default textModifierService;
