var isTouch = () => {
    isTouch = Boolean ( typeof window !== "undefined" && ( "ontouchstart" in window || 
                        window.navigator.msMaxTouchPoints || window.navigator.mMaxTouchPoints ||  
                        window.DocumentTouch && document instanceof DocumentTouch ));
    return isTouch;
}
module.exports = isTouch;