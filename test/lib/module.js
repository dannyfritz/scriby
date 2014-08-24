/**
This is a __module__ description.

@module testModule
*/

/**
A class.

@class testClass
@constructor
@param options {Object} The options object
*/

	/**
	@since 2.0
	A property.

	@property testProperty
	@type String
	@default "Test Default"
	*/

	/**
	@deprecated Use `testProperty`
	Another property.

	@property anotherProperty
	@type Number
	@final
	@default 1337
	*/

	/**
	A method.

	@method addMethod
	@beta
	@param number1 {Number}
	@param number2 {Number}
	@return {Number} The addition of the 2 numbers.

	@example
	addMethod(1, 2) // => 3
	*/

	/**
	An event.

	@event testEvent
	@bubbles
	@param number1 {Number}
	@param number2 {Number}
	@return {Number} The addition of the 2 numbers.
	*/

/**
A class.

@class secondClass
@uses withFlight
@static
@param options {Object} The options object
@param [numbers]* {Object} Numbers!
*/

	/**
	Private method.

	@method privateMethod
	@async
	@chainable
	@private
	@return {Object} Private stuff.
	*/

