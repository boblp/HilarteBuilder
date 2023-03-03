import { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

import './App.css'

function App() {
  const [steps, setSteps] = useState([
    87,18,95,22,98,25,94,19,98,58,100,24,97,21,99,17,96,27,93,20,90,28,92,13,94,23,92,15,97,26,86,8,88,29,91,24,99,59,103,63,107,66,141,67,107,62,102,23,101,20,86,24,83,4,73,3,94,18,99,13,98,14,93,26,89,7,91,18,97,23,84,30,81,9,99,11,76,298,77,2,95,6,74,285,72,151,13,100,17,95,24,90,311,83,32,90,313,89,29,85,27,91,309,87,9,100,1,96,16,91,317,100,12,93,24,87,19,93,4,100,319,82,29,79,303,85,21,92,307,88,17,98,233,97,228,93,308,128,62,109,11,149,70,146,8,100,16,154,72,281,74,30,180,29,87,314,101,316,86,34,185,32,80,158,15,99,0,139,8,141,3,103,12,155,74,150,7,94,226,97,303,122,22,168,24,76,287,73,156,10,80,20,67,214,66,143,5,96,23,98,232,96,224,95,19,172,25,75,284,77,162,21,90,25,129,307,126,306,94,26,70,214,68,212,64,208,65,139,1,104,296,119,297,240,299,101,7,145,11,100,318,136,33,183,32,179,30,133,63,137,67,206,65,15,91,23,120,299,82,31,209,64,132,313,101,293,235,96,13,162,76,300,99,12,164,76,280,225,95,304,84,2,134,314,54,290,233,95,15,153,77,159,20,175,27,89,28,86,2,100,301,122,20,99,289,72,25,181,29,83,160,14,155,78,33,187,39,270,216,39,190,41,271,215,67,204,50,285,229,92,20,170,80,306,130,311,91,314,137,317,75,9,147,69,203,49,201,47,196,43,194,38,191,36,266,27,92,221,276,71,282,226,46,198,255,80,161,9,140,319,146,71,285,97,230,98,12,118,294,100,297,102,296,240,173,18,93,227,98,298,239,98,15,94,53,291,117,283,78,24,170,22,126,32,81,159,7,100,5,136,34,77,278,223,43,191,40,269,217,38,294,121,23,117,16,152,319,144,12,167,79,32,276,89,315,100,311,138,62,115,284,230,91,20,164,85,31,81,155,5,148,10,100,3,104,239,172,21,82,24,166,234,289,96,15,85,266,80,294,103,298,58,300,123,19,177,242,301,44,193,37,214,72,20,176,85,315,133,305,127,312,88,28,84,194,42,189,250,107,7,157,73,274,219,93,233,162,7,141,314,100,14,97,223,96,299,124,23,88,270,19,92,228,285,73,279,120,25,71,211,265,86,196,254,317,54,313,145,72,0,100,288,231,97,242,107,254,81,300,121,292,234,164,24,173,82,261,110,249,310,126,297,78,168,237,169,14,99,26,95,236,51,288,73,209,63,202,48,229,157,82,2,136,68,200,64,201,255,106,244,180,18,178,35,264,25,69,261,59,304,100,316,131,305,245,182,24,167,78,277,123,17,94,278,122,291,101,292,117,294,74,24,180,34,79,160,75,149,2,157,18,79,268,16,150,69,215,36,204,65,207,66,20,271,30,86,178,30,207,263,109,252,67,196,42,221,273,42,261,84,298,240,292,52,234,97,224,93,281,113,287,234,92,282,118,15,154,10,140,311,114,286,78,304,109,250,79,166,14,95,308,247,185,27,90,199,46,225,153,80,33,211,65,214,265,81,308,69,199,66,197,46,257,27,130,37,160,228,98,284,114,14,172,30,269,61,132,203,255,199,50,237,94,27,87,198,70,280,118,23,99,6,144,317,83,193,247,111,260,60,311,102,313,100,300,131,302,43,272,111,305,87,157,318,61,267,212,63,176,242,49,238,107,253,315,149,220,277,79,158,228,49,286,244,97,13,173,239,48,281,75,164,6,100,302,123,289,35,212,70,27,98,231,184,247,105,295,240,109,264,34,156,4,133,31,80,157,3,148,81,262,79,163,85,259,82,28,282,232,161,22,143,12,102,3,161,227,154,71,18,176,27,268,17,93,202,24,188,30,260,114,268,38,250,104,298,101,287,232,97,236,167,20,265,74,154,79,256,198,127,273,35,78,263,112,244,95,16,168,232,290,72,210,63,274,91,26,147,5,78,160,82,276,88,27,245,181,17,269,78,281,119,298,132,39,184,28,174,21,89,182,230,46,194,68,305,100,307,248,104,293,120,62,131,202,258,107,244,110,268,219,40,164,235,168,98,226,95,316,71,205,52,235,98,7,136,206,29,75,285,55,5,149,214,64,177,238,297,106,2,163,14,119,279,76,35,137,319,150,314,74,144,217,23,128,304,112,257,83,31,87,174,239,97,16,94,21,264,24,92,18,269,89,203,51,242,282,73,6,104,254,318,54,250,312,137,4,99,10,146,212,66,205,94,227,280,121,268,69,20,178,228,156,5,160,72,202,52,296,101,294,240,291,124,287,74,208,32,262,43,220,161,75,258,110,306,100,309,248,36,292,73,25,165,233,189,52,232,283,226,90,275,121,256,38,161,2,167,98,224,157,33,210,96,286,115,250,97,12,95,311,146,80,249,188,246,55,294,57,301,98,169,79,33,212,145,5,108,241,98,11,153,84,175,65,142,304,88,21,91,31,285,117,10,169,233,163,0,54,253,48,259,115,247,67,201,129,309,138,17,270,76,250,78,267,71,217,143,7,99,283,120,281,224,170,9,136,15,258,61,270,26,204,133,38,192,45,195,255,96,20,70,251,96,244,104,175,241,107,247,109,269,131,65,215,269,213,27,121,192,83,262,21,84,260,81,191,49,261,107,239,110,181,229,156,11,77,287,72,30,286,28,87,169,21,272,40,262,80,211,69,258,120,296,239,180,67,195,85,174,226,47,282,76,140,307,44,278,78,188,49,229,98,225,151,215,64,207,138,305,141,319,104,64,154,223,18,179,243,113,303,244,76,13,155,3,105,298,41,222,148,15,89,49,200,89,229,287,75,298,96,14,266,216,38,141,20,252,34,128,290,119,260,110,262,59,312,100,299,103,293,106,177,21,87,276,125,197,41,247,96,56,245,28,132,29,210,93,186,246,51,285,79,266,28,238,91,19,221,79,152,14,267,62,176,239,171,19,264,107,243,97,166,222,17,183,71,250,110,273,218,157,316,254,199,65,202,49,181,89,316,59,268,47,319,130,201,23,122,254,315,137,1,98,234,53,231,159,82,190,50,203,38,214,77,165,319,157,72,198,45,306,246,74,166,88,265,37,185,231,271,60,131,68,288,244,91,200,63,174,83,168,23,277,81,172,8,99,1,88,159,85,197,68,12,136,6,63,208,264,69,206,135,295,118,260,73,250,119,294,35,205,75,245,189,95,256,33,277,120,257,195,44,231,164,236,276,35,267,69,277,225,45,277,86,261,106,265,21,67,303,143,219,159,76,301,96,163,84,258,115,186,54,207,96,11,97,237,296,100,227,14,68,269,27,258,40,252,107,233,164,228,90,202,28,85,267,82,307,109,241,97,235,49,251,45,303,134,296,118,313,71,204,254,97,227,156,8,90,26,279,93,16,224,158,311,128,199,53,187,42,263,22,164,2,162,10,98,222,165,91,51,247,95,55,298,100,170,79,5,157,21,220,77,279,228,154,32,84,151,69,316,99,176,235,103,296,123,194,255,107,260,115,1,165,228,65,277,34,290,234,293,240,74,267,67,212,136,14,179,245,97,240,30,206,64,283,89,265,107,235,170,239,43,210,142,8,98,20,68,273,124,293,50,179,108,254,72,148,221,65,179,40,304,248,78,163,41,218,38,259,60,308,59,247,116,313,157,226,93,250,112,16,269,19,89,207,74,291,43,254,30,82,146,27,267,72,184,92,314,151,319,145,24,192,234,51,237,93,275,123,319,148,24,94,172,16,134,30,259,96,166,43,222,147,76,204,95,3,258,77,203,52,201,241,23,280,91,190,38,205,90,217,69,10,262,28,284,125,308,249,120,276,78,257,62,275,36,88,26,252,80,191,251,107,256,82,193,64,218,74,33,206,269,64,185,248,97,192,247,194,122,21,261,68,208,71,260,74,211,42,311,137,208,95,277,32,213,65,113,244,116,250,296,75,35,234,39,258,123,290,50,279,72,307,143,79,213,135,69,109,260,76,259,22,242,45,213,38,193,53,233,161,237,49,240,169,97,310,43,190,118,77,167,318,152,5,146,66,309,73,212,82,254,179,87,197,255,202,103,175,94,209,262,18,268,61,1,70,281,52,263,36,216,153,309,249,94,230,183,112,71,162,315,157,243,76,184,53,237,107,294,127,21,150,79,187,232,65,299,75,186,20,197,56,302,242,31,189,41,244,102,173,233,286,124,254,22,261,52,200,70,317,93,187,101,289,58,297,88,178,66,254,77,139,208,55,261,72,207,79,161,231,91,237,167,235,110,254,86,162,5,154,317,88,302,91,242,77,32,135,7,49,300,40,196,124,288,116,290,57,9,64,222,167,44,309,149,73,247,311,116,246,187,12,94,203,24,235,29,260,100,295,85,4,236,180,96,164,319,139,36,159,242,283,72,318,168,25,267,70,160,233,170,91,268,129,272,121,0,107,240,179,38,240,46,152,248,107,259,126,274,71,237,102,4,65,195,236,72,251,92,25,214,34,182,239,175,82,122,26,184,32,153,67,27,264,12,106,8,180,32,249,311,141,216,45,159,74,279,66,21,276,113,239,49,193,68,181,20,220,107,245,155,15,151,221,35,252,302,109,291,247,36,85,150,5,234,107,262,67,213,63,129,200,45,197,71,255,121,207,29,187,257,80,122,12,174,248,20,88,2,92,273,30,227,78,296,97,246,151,75,142,10,230,165,95,227,175,86,305,38,223,93,264,18,218,66,242,300,71,261,60,136,43,214,40,301,146,316,63,191,31,284,244,191,83,177,105,293,128,36,259,119,72,134,215,49,225,14,161,240,93,310,70,245,33,265,84,244,111,251,149,23,95,205,74,114,278,230,33,128,276,65,212,94,221,146,24,215,139,303,46,266,54,195,52,288,28,285,86,233,7,92,185,262,19,271,130,305,99,263,11,228,87,275,226,13,165,314,96,178,50,187,34,211,67,17,194,82,162,96,258,175,24,249,150,214,63,280,124,0,137,299,83,306,144,5,113,260,174,104,200,40,233,190,119,249,97,225,43,229,286,92,280,87,260,117,281,28,239,185,114,285,103,204,51,289,93,173,48,91,233,171,57,237,295,208,66,202,242,36,94,225,47,182,38,219,147,298,52,92,258,81,188,233,42,247,154,65,267,75,201,131,89,250,27,261,9,214,101,173,5,138,217,274,60,169,244,49,179,68,310,152,73,259,4,98,221,261,63,215,17,182,109,67,198,238,2,159,93,229,180,245,35,191,97,229,50,222,112,206,74,163,5,252,104,255,86,27,83,312,247,30,264,22,187,46,238,37,82,265,92,230,87,202,26,131,210,143,39,262,85,301,78,208,128,281,43,169,91,289,79,190,34,297,153,71,214,85,235,6,66,177,257,143,64,273,74,242,42,226,161,93,271,21,160,49,231,131,203,134,275,213,75,236,145,68,172,27,263,35,243,3,150,77,267,68,25,142,40,230,36,196,247,175,43,219,65,226,133,266,213,46,196,87,127,56,286,119,26,265,13,227,52,183,38,295,106,201,48,2,165,315,54,296,124,223,98,295,57,224,27,249,58,182,241,318,255,95,257,127,79,141,309,157,86,126,218,158,241,110,66,209,313,56,250,114,64,270
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { speak } = useSpeechSynthesis();

  const past = () => {
    setCurrentIndex(currentIndex-1)
    speak({ text: `past, ${steps[currentIndex-1]}` })
  }

  const next = () => {
    setCurrentIndex(currentIndex+1)
    speak({ text: `next, ${steps[currentIndex+1]}` })
  }

  const pedal = (e: any) => {
    if(e.key === 'b') {
      next()
    }
  }

  return (
    <div className="App">

      <h2>Done: <b>{ currentIndex }</b> Left: <b>{ steps.length - currentIndex }</b></h2>
      <br />
      <h1>Next:</h1>
      <h1 style={{ fontSize: '180px' }}>{ steps[currentIndex] }</h1>

      <button onClick={() => past() }>past</button>
      <button
        onClick={() => next() }
        onKeyDown={(e) => pedal(e)}
      >next</button>
    </div>
  )
}

export default App
