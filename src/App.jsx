import { useState } from "react";
function App() {

    const [color,setColor] = useState("olive")

    return (
        <div className="w-full h-screen duration-500" style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
                <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-3xl border-2 border-black shadow-2xl"
                    style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.5)" }}>
                    <button
                        onClick={() => setColor("red")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl border-2 border-black" style={{
                            backgroundColor: "red",
                             boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                        }}>
                        Red
                    </button>
                    <button
                        onClick={() => setColor("green")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "green",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                         }}
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor("blue")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "blue",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                        }}
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => setColor("yellow")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "yellow",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                         }}
                    >
                        Yellow
                    </button><button
                        onClick={() => setColor("#E97451")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "#E97451", 
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                         }}
                    >
                        Burnt Sienna
                    </button><button
                        onClick={() => setColor("#DA70D6")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "#DA70D6",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                         }}
                    >
                        Orchid
                    </button><button
                        onClick={() => setColor("#CCCCFF")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "#CCCCFF",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                         }}
                    >
                        Periwinkle
                    </button><button
                        onClick={() => setColor("#FA8072")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl border-2 border-black"
                        style={{
                            backgroundColor: "#FA8072",
                            boxShadow: "0 6px 5px rgba(0, 0, 0, 0.5)" 
                            
                            
                         }}
                    >
                        Salmon
                    </button>
                </div>

            </div>
        </div>
    )
}

export default App