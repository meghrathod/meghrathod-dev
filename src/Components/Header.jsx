/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const getSystemTheme = () => {
    let prefersDark;
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        prefersDark = true;
    } else {
        prefersDark = false;
    }
    return prefersDark ? "dark" : "light";
};

function Header({ noBack })  {
    const [theme, setTheme] = useState(getSystemTheme());

    

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
        // add to local storage and html classlist
        if (theme === "light") {
            localStorage.setItem("color-theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            localStorage.setItem("color-theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    const [isHidden, setIsHidden] = useState(false);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsHidden(
                currentScrollPos > prevScrollPos && currentScrollPos > 0
            );
            prevScrollPos = currentScrollPos;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // A div to fix the header to the top of the page
        <div
            className="sticky top-0 transition-transform duration-300 ease-in-out transform z-50 w-screen"
            style={{
                transform: isHidden ? "translateY(-100%)" : "translateY(0)",
            }}
        >
            <div className="flex items-center justify-between py-4 px-6 header">
                <button onClick={handleBackClick} style={{ visibility: noBack === "true" ? "hidden" : "visible" }}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-gray-600 dark:text-gray-400"
                    />
                </button>
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faSun}
                        className={`text-gray-600 dark:text-gray-400 ${theme === "dark" ? "hidden" : ""
                            }`}
                    />
                    <FontAwesomeIcon
                        icon={faMoon}
                        className={`text-gray-600 dark:text-gray-400 ${theme === "light" ? "hidden" : ""
                            }`}
                    />
                    <span className="text-gray-600 dark:text-gray-400 ml-4"></span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            {...(theme === "dark" ? { checked: true } : {})}
                            className="sr-only peer"
                            onChange={toggleTheme}
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none
                         
                           rounded-full peer
                           dark:bg-gray-700 peer-checked:after:translate-x-full
                        peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-0.5 after:left-[4px]
                         after:bg-white after:border-gray-300 
                         after:border after:rounded-full after:h-6 after:w-6 
                         after:transition-all
                          dark:border-gray-600 peer-checked:bg-gray-600"></div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Header;
