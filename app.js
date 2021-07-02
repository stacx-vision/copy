/* 
    @package - click to copy text
    @content creator - silent code
*/
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
}

.form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    position: relative;
    height: 20vh;
    width:30%;
    /* background-color: orangered; */
}

.success {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    font-size: 1rem;
    color: green;
    /* display: none; */
    opacity: 0;
    transition: .9s ease all;
}

.success.active{
    /* display: block; */
    opacity: 1;
}

#text-input {
    font-size: 1.6rem;
    padding: .6rem 1rem;
    border-radius: 0;
    border: 1px solid black;
}

#text-input:focus {
    outline: 0;
}

#copy-btn {
    font-size: 1.8rem;
    padding: .6rem;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-left: 0;
    transition: .3s ease all;
    cursor: pointer;
}

#copy-btn:hover {
    background-color: white;
    color: black;
}

#copy-btn:focus {
    background-color: green;
}
