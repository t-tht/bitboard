/**
 * Button events
 */
enum BBEvents {
    released = 0,
    pressed = 1
}

/**
  * Enumeration of buttons
  */
enum BBButtons {
    //% block="button1"
    Button1 = 0,
    //% block="button2"
    Button2 = 1,
    //% block="button3"
    Button3 = 2,
    //% block="button4"
    Button4 = 3,
}

/**
  * Enumeration of functional keys
  */
enum BBFuncKeys {
    //% block="enter"
    Enter = 0,
    //% block="space"
    Space = 1,
    //% block="backspace"
    Backspace = 2,
    //% block="tab"
    Tab = 3,
    //% block="escape"
    Escape = 4,
    //% block="capslock"
    CapsLock = 5,
}

/**
  * Enumeration of F keys
  */
enum BBFKeys {
    //% block="F1"
    F1 = 0,
    //% block="F2"
    F2 = 1,
    //% block="F3"
    F3 = 2,
    //% block="F4"
    F4 = 3,
    //% block="F5"
    F5 = 4,
    //% block="F6"
    F6 = 5,
    //% block="F7"
    F7 = 6,
    //% block="F8"
    F8 = 7,
    //% block="F9"
    F9 = 8,
    //% block="F10"
    F10 = 9,
    //% block="F11"
    F11 = 10,
    //% block="F12"
    F12 = 11,
}


/**
  * Enumeration of functional keys
  */
enum BBDirections {
    //% block="Up"
    Up = 0,
    //% block="Down"
    Down = 1,
    //% block="Left"
    Left = 2,
    //% block="Right"
    Right = 3,
    //% block="PageUp"
    PageUp = 4,
    //% block="PageDown"
    PageDown = 5,
}

/**
  * Enumeration of volume keys
  */
enum BBVolume {
    //% block="Up"
    Up = 0,
    //% block="Down"
    Down = 1,
    //% block="Mute"
    Mute = 2,
}

//% weight=10 color=#F47442 icon="\uf11b"
namespace bitboard
{
    /**
      *	Send string through BLE
      */
    //% block="send string %text"
    //% subcategory=Inputs
    //% group=Inputs
    //% text.defl="enter string"
    export function sendstr(text: string){
      //bitboard.send_string();
    }

    /**
      *	Send functional keys through BLE
      */
    //% block="send %funckey"
    //% funckey.fieldEditor="gridpicker" funckey.fieldOptions.columns=3
    //% subcategory=Inputs
    //% group=Inputs
    export function sendfunckey(funckey: BBFuncKeys){
      //switch (funckey)
	  //       {
      //      case BBFuncKeys.Enter: bitboard.send_function_keys(0x04);
      //      case BBFuncKeys.Space: return bitboard.send_function_keys(0x2c);
      //      case BBFuncKeys.Backspace: return bitboard.send_function_keys(0x2a);
      //      case BBFuncKeys.Tab: return bitboard.send_function_keys(0x2b);
      //      case BBFuncKeys.Escape: return bitboard.send_function_keys(0x29);
      //      case BBFuncKeys.CapsLock: return bitboard.send_function_keys(0x39);
	  //        default: return false;
      //     }
    }

    /**
      *	Send F keys through BLE
      */
    //% block="send %fkey"
    //% fkey.fieldEditor="gridpicker" fkey.fieldOptions.columns=4
    //% subcategory=Inputs
    //% group=Inputs
    export function sendfkey(fkey: BBFKeys){
      //switch (fkey)
	  //       {
      //      case BBFKeys.F1: return bitboard.send_function_keys(0x3a);
      //      case BBFKeys.F2: return bitboard.send_function_keys(0x3b);
      //      case BBFKeys.F3: return bitboard.send_function_keys(0x3c);
      //      case BBFKeys.F4: return bitboard.send_function_keys(0x3d);
      //      case BBFKeys.F5: return bitboard.send_function_keys(0x3e);
	//    case BBFKeys.F6: return bitboard.send_function_keys(0x3f);
	//    case BBFKeys.F7: return bitboard.send_function_keys(0x40);
	//    case BBFKeys.F8: return bitboard.send_function_keys(0x41);
	//    case BBFKeys.F9: return bitboard.send_function_keys(0x42);
	//    case BBFKeys.F10: return bitboard.send_function_keys(0x43);
	//    case BBFKeys.F11: return bitboard.send_function_keys(0x44);
	//    case BBFKeys.F12: return bitboard.send_function_keys(0x45);
	  //        default: return false;
      //     }
    }

    /**
      *	Send functional keys through BLE
      */
    //% block="go %directions"
    //% directions.fieldEditor="gridpicker" directions.fieldOptions.columns=3
    //% subcategory=Inputs
    //% group=Inputs
    export function godirections(directions: BBDirections){
    //send directions
    }

    /**
      *	Adjusting volume
      */
    //% block="Turn volume %volume"
    //% volume.fieldEditor="gridpicker" volume.fieldOptions.columns=3
    //% subcategory=Inputs
    //% group=Inputs
    export function adjustvolume(volume: BBVolume){
    //adjust volume
    }

    ////% block="pause $ms"
    ////% ms.shadow="timePicker"
    //export function pause(ms: number) {
    //
    //}
}
