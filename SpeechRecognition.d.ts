/**
 * SpeechRecognition interface
 */

/**
 * SpeechRecognitionErrorEvent interface
 */
interface SpeechRecognitionErrorEvent extends Event {
  /** type of error raised */
  readonly error: string;
  /** message describing the error */
  readonly message: string;

  /**
   * Constructor
   * @param type - the type of the event
   * @param eventInitDict - the event initialization dictionary
   */
  constructor(type: string, eventInitDict: SpeechRecognitionErrorEventInit);
}

/**
 * SpeechRecognitionErrorEventInit dictionary
 */
interface SpeechRecognitionErrorEventInit extends EventInit {
  error: string;
  message: string;
}

/**
 * SpeechRecognitionEvent interface
 */
interface SpeechRecognitionEvent extends Event {
  /** EMMA representation of the result (deprecated) */
  readonly emma: Document;
  /** semantic meaning of what the user said (deprecated) */
  readonly interpretation: any;
  /** lowest index value result that has changed */
  readonly resultIndex: number;
  /** list of speech recognition results */
  readonly results: SpeechRecognitionResultList;

  /**
   * Constructor
   * @param type - the type of the event
   * @param eventInitDict - the event initialization dictionary
   */
  constructor(type: string, eventInitDict: SpeechRecognitionEventInit);
}

/**
 * SpeechRecognitionEventInit dictionary
 */
interface SpeechRecognitionEventInit extends EventInit {
  emma?: Document;
  interpretation?: any;
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

/**
 * SpeechRecognition interface
 */
interface SpeechRecognition extends EventTarget {
  /** collection of SpeechGrammar objects */
  grammars: SpeechGrammarList;
  /** language of the recognition */
  lang: string;
  /** whether to return continuous results or not */
  continuous: boolean;
  /** whether to return interim results or not */
  interimResults: boolean;
  /** maximum number of alternatives per result */
  maxAlternatives: number;

  /**
   * Events
   */
  /** fired when audio capture starts */
  onaudiostart: (event: Event) => void;
  /** fired when audio capture ends */
  onaudioend: (event: Event) => void;
  /** fired when recognition service disconnects */
  onend: (event: Event) => void;
  /** fired when an error occurs */
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  /** fired when no match is found */
  onnomatch: (event: SpeechRecognitionEvent) => void;
  /** fired when a result is returned */
  onresult: (event: SpeechRecognitionEvent) => void;
  /** fired when any sound is detected */
  onsoundstart: (event: Event) => void;
  /** fired when any sound ends */
  onsoundend: (event: Event) => void;
  /** fired when speech is detected */
  onspeechstart: (event: Event) => void;
  /** fired when speech ends */
  onspeechend: (event: Event) => void;
  /** fired when recognition service starts */
  onstart: (event: Event) => void;

  /**
   * Constructor
   */
  constructor();

  /**
   * Instance methods
   */
  /** stop the recognition service and do not return a result */
  abort(): void;
  /** start the recognition service */
  start(): void;
  /** stop the recognition service and return a result */
  stop(): void;
}
