import { useEffect, useRef, useState } from 'react';
import '../App.css';

const ChatInput = () => {
    const inputRef = useRef(null); 
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = () => {
        // setBoxValue(inputValue)
        console.log("Submitted!")
    }

    useEffect (() => {
        const handleKeyDown = (event) => {
            const otherKeys = ['Shift', 'CapsLock', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Tab', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Home', 'End', 'PageUp', 'PageDown', 'Insert']
            if (event.altKey || event.ctrlKey || event.metaKey || otherKeys.includes(event.key)) return;
            console.log(event.key)
            if(document.activeElement !== inputRef.current) {
                inputRef.current.focus()
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        };
    }, []);

    const onKeyDown = (event) => {
        if (event.key == 'Enter' && !event.isComposing)
        {
            alert("asdfadsf!")
            onSubmit();
        }
        return;
    }

    return (
        <input
        type="text"
        id="chatInput"
        className='chat-input'
        value={inputValue}
        placeholder="Type here..."
        ref={inputRef}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
    )
}

export default ChatInput;