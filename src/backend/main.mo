import Text "mo:core/Text";
import Principal "mo:core/Principal";

actor {
  public shared ({ caller }) func greet(name : Text) : async Text {
    let callerText = caller.toText();
    "Hello, " # name # "! Welcome to Charan Sparsh 🦶🏼 Principal: " # callerText;
  };
};
