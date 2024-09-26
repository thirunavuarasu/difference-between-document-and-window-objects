                                                                        Difference between document objects and window objects

What is the Window Object?
The Window object represents the browser window or tab in which your web page is displayed. It serves as the global context for JavaScript execution, meaning that any variable or function declared in the global scope is actually a property of the Window object.

Key Features of the Window Object:
Global Scope: Any global variable or function is attached to the Window object. For example, if you declare a variable var myVar = 10;, you can access it using window.myVar.

Browser Control: The Window object provides methods to control the browser window, such as open(), close(), and alert(). You can create new windows or tabs, and manage them using this object.

Event Handling: The Window object is also responsible for handling events that occur in the browser, such as resizing the window or scrolling.

Accessing the Document: The Window object contains a property called document, which refers to the Document object representing the webpage currently loaded in the window.

What is the Document Object?
The Document object represents the entire HTML or XML document loaded in the browser window. It provides methods and properties to access and manipulate the content of the page.

Key Features of the Document Object:
DOM Access: The Document object allows you to interact with the Document Object Model (DOM), which represents the structure of the webpage. You can use methods like getElementById(), getElementsByClassName(), and querySelector() to select and manipulate elements on the page.

Content Manipulation: With the Document object, you can create, remove, and modify elements within the DOM. This includes changing text, attributes, and styles of elements dynamically.

Event Handling: You can also attach event listeners to elements using the Document object, enabling interactive behavior on the webpage.

Accessing Metadata: The Document object provides access to metadata about the document, such as its title, URL, and character set.




                                            Key Differences Between Document and Window Objects
Feature	:      Window Object	                                                                  Document Object
Scope	:  Represents the entire browser window/tab	                            Represents the loaded document (HTML/XML)
Global Context:	Serves as the global context for JS code	                    Focused on the content and structure of the page
Methods:	Browser control (open, close, alert)	                            DOM manipulation (getElementById, createElement)
Properties:	Contains the Document object as window.                             document	Contains information about the document (title, URL)
Event Handling:	Handles browser-level events (resize, scroll)	                Handles document-level events (clicks, form submissions)