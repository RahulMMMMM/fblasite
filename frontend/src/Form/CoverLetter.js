import { useState } from "react";
import useFormContext from "../hooks/useFormContext";

export function CoverLetter (){

    const { data, handleChange } = useFormContext()
    const [wordCount,setWordCount] = useState(0);
  
    const handleInput = (event) => {
      const inputText = event.target.value;
      setWordCount(inputText.split(/\s+/).filter(word => word !== '').length);
    };
  
    const content = (
      <div>
        <label htmlFor="essay">Share your motivation for applying and how your values align with  .</label>
        <textarea
          value={data.coverLetter}
          name="coverLetter"
          onChange={handleChange}
          onInput={handleInput}
          rows={20} 
          cols={50} 
          placeholder="Type your essay here..."
          className="overflow-y-scroll"
        />
        <p>{wordCount} words</p>
      </div>
    )

    return content
}