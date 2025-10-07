// quillbot.js - safe version
// Only sets up a bridge between the page and extension

chrome = chrome ?? browser;

window.addEventListener("QuillBot-Premium-Crack-Send", async function(event) {
    const message = event.detail;

    try {
        // Send the message to the extension background
        const response = await chrome.runtime.sendMessage(message);

        // Dispatch a response back to the page
        window.dispatchEvent(
            new CustomEvent("QuillBot-Premium-Crack-Receive", { detail: response })
        );
    } catch (err) {
        console.error("QuillBot bridge error:", err);
        window.dispatchEvent(
            new CustomEvent("QuillBot-Premium-Crack-Receive", {
                detail: { success: false, error: err.message }
            })
        );
    }
}, false);
