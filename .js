if (!window.Box) {
	window.Box = (function (global) {
		function Box(value) {
			// when this === global, the new keyword has NOT been used
			// for null and undefined, we ALWAYS want to Box the value
			if ((this === global) && (value != null)) {
				switch (typeof (value)) {
					case "object":
						return value;
					case "boolean":
						return new Boolean(value);
					case "number":
						return new Number(value);
					case "string":
						return new String(value);
				}
			}

			// either no case has returned the boxed value,
			//    or the new keyword has NOT been used,
			//    or the value was null or undefined,
			//    so Box the value

			if (this === global) {
				// the new keyword was NOT used,
				//    so return a new Box
				return new Box(value);
			}
			else {
				// the new keyword WAS used,
				//    so add the valueOf method to use the current value
				this.valueOf = function box_valueOf() {
					return value;
				};
			}
		}

		Box.prototype.unbox = function () {
			return this.valueOf();
		};

		// a static method, which will return the original unboxed value
		//    from any box object
		Box.unbox = function (boxed) {
			return boxed.valueOf();
		};

		return Box;
	})(this);
}