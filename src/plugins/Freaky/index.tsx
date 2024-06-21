import { addChatBarButton, removeChatBarButton } from "@api/ChatButtons";
import { ChatBarButton } from "@api/ChatButtons";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { getCurrentChannel } from "@utils/discord";
import { sendMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { useState } from "@webpack/common";
import { addPreSendListener, removePreSendListener, SendListener } from "@api/MessageEvents";

function textProcessing(text : string)
{
    const freakyChars = {
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖',
        'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝',
        'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤',
        'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰',
        'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷',
        'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾',
        'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
    };

    return text.split('').map(char => freakyChars[char] || char).join('');
}

const presendObject : SendListener = (channelId, msg) =>
{
    msg.content = textProcessing(msg.content);
};

const ChatBarIcon: ChatBarButton = () => {

    const [freakyDisabled, setFreakyDisabled] = useState(true);

    return (
        <ChatBarButton tooltip="Freaky" onClick={() => 
        {
            setFreakyDisabled(!freakyDisabled);
            if(freakyDisabled)
            {
                addPreSendListener(presendObject);
            }
            else
            {
                removePreSendListener(presendObject);    
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512">
                <path fill={freakyDisabled ? "var(--status-danger)" : "currentColor"} d="M0 256c0 112.9 73.1 208.7 174.5 242.8C165.3 484 160 466.6 160 448v-47.3c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V448c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256m176.4-80a32 32 0 1 1 0 64a32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0M320 448v-45.4c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V448c0 35.3 28.7 64 64 64s64-28.7 64-64"/></svg>
        </ChatBarButton>
    );
};

export default definePlugin({
    name: "Freaky",
    description: "Adds a chatbar button to get 𝓯𝓻𝓮𝓪𝓴𝔂 ",
    authors:
    [
        Devs.Samwich
    ],
    start()
    {
        addChatBarButton("vc-freaky", ChatBarIcon);
    },
    stop()
    {
        removeChatBarButton("vc-freaky");
        removePreSendListener(presendObject);
    }
});
