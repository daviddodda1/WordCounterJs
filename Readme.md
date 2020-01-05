# Word Count Display

this is a simple library to display word-count from input-tags or text-fields on a HTML 

## dependency

this library needs [jquery](https://jquery.com/) to function. 

## [Code-pen Example](https://codepen.io/davidreddy293/pen/qBEVeLR)

### usage

Include the js file in your html code

	<script src="WordCounter.js"></script>

add the class "WordCountBox" to the text input box.

	<textarea class="WordCountBox"></textarea>

Add the  "WL-Max" and "WL-Min" attributes to the textarea tag

	<textarea class="form-control WordCountBox" WL-Max="300" WL-Min="5"></textarea>

Add an id to the textarea tag

	<textarea class="form-control WordCountBox" WL-Max="300" WL-Min="5" id="DummyID"></textarea>

add a "for" attribute to any element you want to use to display the word count. 

the value of this attribute must be equal to the ID of the textarea tag.

	<span for="DummyID">0/300 Words</span>


That's it!!

#### Note :

feedback is appreciated. 
