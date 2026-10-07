 "use client";
import {useEffect,useState} from "react";
export function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const d=localStorage.getItem("theme")==="dark";setDark(d);document.documentElement.classList.toggle("dark",d)},[]);function toggle(){const n=!dark;setDark(n);localStorage.setItem("theme",n?"dark":"light");document.documentElement.classList.toggle("dark",n)}return <button className="iconbtn" onClick={toggle} aria-label="Toggle dark mode">{dark?"☀️":"🌙"}</button>}
