import { useState } from 'react';
import Editor from "@monaco-editor/react";
import Toolbar from './Toolbar';
import Axios from 'axios';
// import spinner from './spinner.svg';
import classes from "./Assignment.module.css";


function Assignment() {

// State variable to set users source code
const [userCode, setUserCode] = useState(``);

// State variable to set editors default language
const [userLang, setUserLang] = useState("python");

// State variable to set editors default theme
const [userTheme, setUserTheme] = useState("light");

// State variable to set editors default font size
const [fontSize, setFontSize] = useState(20);

// State variable to set users input
const [userInput, setUserInput] = useState("");

// State variable to set users output
const [userOutput, setUserOutput] = useState("");

// Loading state variable to show spinner
// while fetching data
const [loading, setLoading] = useState(false);

const options = {
	fontSize: fontSize
}

// Function to call the compile endpoint
function compile() {
	setLoading(true);
	if (userCode === ``) {
	return
	}

	// Post request to compile endpoint
	Axios.post(`http://localhost:8001/compile`, {
	code: userCode,
	language: userLang,
	input: userInput }).then((res) => {
	setUserOutput(res.data.output);
	}).then(() => {
	setLoading(false);
	})
}

// Function to clear the output screen
function clearOutput() {
	setUserOutput("");
}

return (

	<div style={{display:"block", margin:"24px"}}>
			<div className={classes.Questions} style={{marginRight:"16px"}}>
				<h4>Question</h4>
				<br></br>
				<p>
					Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
				</p>
				<br></br>
				<h4>Example output</h4>
				<br></br>
				<p><strong>[1,2,3,4,4,5,6]</strong></p>
			</div>
	
		<div className={classes.Empp}>
			
		<Toolbar
			userLang={userLang} setUserLang={setUserLang}
			userTheme={userTheme} setUserTheme={setUserTheme}
			fontSize={fontSize} setFontSize={setFontSize}
		/>
		<div className={classes.main}>
			<div className={classes.leftContainer}>
			<Editor
				options={options}
				height="calc(80vh - 50px)"
				width="auto"
				theme={userTheme}
				language={userLang}
				defaultLanguage="python"
				defaultValue="# Enter your code here"
				onChange={(value) => { setUserCode(value) }}
			/>
			<button className={classes.runBtn} onClick={() => compile()}>
				Run
			</button>
			</div>
			<div className={classes.rightContainer} style={{display:"flex"}}>
			<div>
			<h4>Input:</h4>
				<div className={classes.InputBox}>
					<textarea className={classes.codeInp} onChange=
					{(e) => setUserInput(e.target.value)}>
					</textarea>
				</div>
			</div>
			<div>
			<h4>Output:</h4>
			{loading ? (
				<div className={classes.SpinnerBox}>
				<img src="https://png.pngtree.com/png-clipart/20190918/ourlarge/pngtree-load-the-3273350-png-image_1733730.jpg" alt="Loading..." />
				</div>
			) : (
				<div className={classes.OutputBox}>
				<pre>{userOutput}</pre>
				<button onClick={() => { clearOutput() }}
					className={classes.ClearBtn}>
					Clear
				</button>
				</div>
			)}
			</div>
			</div>
		</div>
		</div>
	</div>
);
}

export default Assignment;
