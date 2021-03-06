export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["es"],
    locale: "es",
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:10,
    lvl_selection:0,
    probability:{
      amarillo:1,
      marron:1,
      azul:1,
      verde:1,
      puntolimpio:1,
      sigre:1,
    }
  },
  production:{
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["es"],
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:10,
    lvl_selection:0,
    probability:{
      amarillo:1,
      marron:1,
      azul:1,
      verde:1,
      puntolimpio:1,
      sigre:1,
    }
  },
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();