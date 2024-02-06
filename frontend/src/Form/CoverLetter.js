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
      <div className="flex flex-col items-center space-y-5">
        <label htmlFor="essay">Share your motivation for applying and how your values align with Plato.</label>
        <textarea
          value={data.coverLetter}
          name="coverLetter"
          onChange={handleChange}
          onInput={handleInput}
          rows={20} 
          cols={50} 
          placeholder="Type your essay here..."
          className="overflow-y-scroll bg-[#181424] border border-gray-300 border-opacity-20 my-2 rounded-md
          "
        />
        <p>{wordCount} words</p>
      </div>
    )

    return content
}