export const CREATURE_TYPE = {
  HUMAN: "human",
  REPTILE: "reptilian_humanoid",
  ORK: "ork",
  ALIEN: "alien",
  ELF: "elf",
  DWARF: "dwarf",
  TROLL: "troll",
}
export const CREATION_LIST = [
  CREATURE_TYPE.HUMAN,
  CREATURE_TYPE.ORK,
  CREATURE_TYPE.REPTILE,
  CREATURE_TYPE.ALIEN,
  CREATURE_TYPE.ELF,
  CREATURE_TYPE.DWARF,
  CREATURE_TYPE.TROLL,
]


export const GENDER_TYPE = {
  MALE: "male",
  FEMALE: "female",
}
export const GENDER_LIST = [
  GENDER_TYPE.MALE,
  GENDER_TYPE.FEMALE,
]

export const HAIR_STYLE_TYPE = {
  STRAIGHT: "straight",
  WAVY: "wavy",
  CURLY: "curly",
  COILY: "coily",
  BRAIDED: "braided",
}
export const HAIR_STYLE_LIST = [
  HAIR_STYLE_TYPE.STRAIGHT,
  HAIR_STYLE_TYPE.WAVY,
  HAIR_STYLE_TYPE.CURLY,
  HAIR_STYLE_TYPE.COILY,
  HAIR_STYLE_TYPE.BRAIDED,
]

export const HAIR_COLOR_TYPE = {
  BLACK: "black",
  DARK_BROWN: "dark_brown",
  LIGHT_BROWN: "light_brown",
  BLONDE: "blonde",
  RED: "red",
  SILVER: "silver",
}
export const HAIR_COLOR_LIST = [
  HAIR_COLOR_TYPE.BLACK,
  HAIR_COLOR_TYPE.DARK_BROWN,
  HAIR_COLOR_TYPE.LIGHT_BROWN,
  HAIR_COLOR_TYPE.BLONDE,
  HAIR_COLOR_TYPE.RED,
  HAIR_COLOR_TYPE.SILVER,
]

export const BODY_TYPE = {
  SLIM: "slim",
  AVERAGE: "average",
  ATHLETIC: "athдetic",
  CURVY: "curvy",
  PLUS_SIZE: "plus_size",
}
export const BODY_LIST = [
  BODY_TYPE.SLIM,
  BODY_TYPE.AVERAGE,
  BODY_TYPE.ATHLETIC,
  BODY_TYPE.CURVY,
  BODY_TYPE.PLUS_SIZE,
]

export const OUTFIT_TYPE = {
  DARK_JACKET: "dark_jacket",
  TECHWEAR: "techwear",
  PUFFER_JACKET: "puffer_jacket",
  NEON_BOMBER: "neon_bomber",
  BLAZER_TROUSERS: "blazer_trousers",
  SUIT_SHIRT: "suit_shirt",
  SUIT_TIE: "suit_with_tie",
  BLAZER_SHIRT: "blazer_shirt",
  TURTLENECK_TROUSERS: "turtleneck_trousers",
}
export const OUTFIT_LIST = [
  OUTFIT_TYPE.SUIT_SHIRT,
  OUTFIT_TYPE.DARK_JACKET,
  OUTFIT_TYPE.TECHWEAR,
  OUTFIT_TYPE.PUFFER_JACKET,
  OUTFIT_TYPE.NEON_BOMBER,
  OUTFIT_TYPE.BLAZER_TROUSERS,
  OUTFIT_TYPE.SUIT_TIE,
  OUTFIT_TYPE.BLAZER_SHIRT,
  OUTFIT_TYPE.TURTLENECK_TROUSERS,
]


export const STUDIO_TYPE = {
  BASE: "base"
}
export const STUDIO_LIST = [
  STUDIO_TYPE.BASE,
]


export const BACKGROUND_COLOR = {
  WHITE: "white",
  MAGENTA: "magenta",
  NAVY_BLUE: "navy blue",
  DUSTY_ROSE: "Dusty rose",
  PLUM: "Plum",
  SAGE_GREEN: "Sage green",
  TERRACOTTA: "terracotta",
  MUSTARD_OCHRE: "Mustard ochre",
  DEEP_TEAL: "Deep teal",
  WINE_RED: "Wine red",
  WARN_ORANGE: "warm orange",
  CHOCOLATE_BROWN: "Chocolate brown",
  DEEP_COLOR_BLUE: "deep cool blue",
  OLIVE_GREEN: "olive green",
  STEEL_BLUE: "Steel blue",
  WARM_TAUPE: "warm taupe",
  IVORY_CREAM: "Ivory cream",
  EMERALD_GREEN: "emerald green",
  CAMEL: "Camel",
  GREY: "grey",
  DARK_GREY: "dark grey",
}
export const BACKGROUND_COLOR_LIST = [
  BACKGROUND_COLOR.WHITE,
  BACKGROUND_COLOR.MAGENTA,
  BACKGROUND_COLOR.NAVY_BLUE,
  BACKGROUND_COLOR.DUSTY_ROSE,
  BACKGROUND_COLOR.PLUM,
  BACKGROUND_COLOR.SAGE_GREEN,
  BACKGROUND_COLOR.TERRACOTTA,
  BACKGROUND_COLOR.MUSTARD_OCHRE,
  BACKGROUND_COLOR.DEEP_TEAL,
  BACKGROUND_COLOR.WINE_RED,
  BACKGROUND_COLOR.WARN_ORANGE,
  BACKGROUND_COLOR.CHOCOLATE_BROWN,
  BACKGROUND_COLOR.DEEP_COLOR_BLUE,
  BACKGROUND_COLOR.OLIVE_GREEN,
  BACKGROUND_COLOR.STEEL_BLUE,
  BACKGROUND_COLOR.WARM_TAUPE,
  BACKGROUND_COLOR.IVORY_CREAM,
  BACKGROUND_COLOR.EMERALD_GREEN,
  BACKGROUND_COLOR.CAMEL,
  BACKGROUND_COLOR.GREY,
  BACKGROUND_COLOR.DARK_GREY,
]

export const POSE_TYPE = {
  STANDING_STRAIGHT: "standing_straight_pose",
  STANDING_HAND_ON_HIP: "standing_hand_on_hip_pose",
  STANDING_LEANING: "standing_leaning_pose",
  STANDING_HEAD_TURN: "standing_head_turn_pose",
  STANDING_DYNAMIC: "standing_dynamic_pose",
  STANDING_CROSSED_LEGS: "standing_crossed_legs_pose",
  STANDING_WALL_LEAN: "standing_wall_lean_pose",
  STANDING_CONTRAPPOSTO: "standing_contrapposto_pose",
  STANDING_HAND_IN_POCKET: "standing_hand_in_pocket_pose",

  STANDING_CROSSED_ARMS: "standing_crossed_arms",
  STANDING_HANDS_ON_HIPS: "standing_hands_on_hips",
  
  // STANDING_HANDS_CLASPED_AT_WAIST: "standing_hands_clasped_at_waist_pose",
  STANDING_TURN_AWAY: "standing_turn_away_pose",
  STANDING_HAND_ADJUSTING: "standing_hand_adjusting_pose",
  // STANDING_HANDS_AT_FRONT: "standing_hands_at_front_pose",
  STANDING_HANDS_BEHIND: "standing_hands_behind_pose",
  STANDING_HANDS_IN_POCKETS: "standing_hands_in_pockets_pose",
  STANDING_HANDS_IN_POCKETS_HEAD_TILTED: "standing_hands_in_pockets_head_tilted",

  STANDING_WALKING_ILLUSION: "standing_walking_illusion_pose",
  STANDING_BASE: "standing_base_pose",
  STANDING_BASE_BACK: "standing_base_back_pose",
  STANDING_BASE_LEFT: "standing_base_left_pose",
  STANDING_BASE_RIGHT: "standing_base_right_pose",

  
  STANDING_THREE_QUARTER: "standing_three_quarter_pose",
  STANDING_FEET_SHOULDER_WIDTH: "standing_feet_shoulder_width_pose",
  STANDING_TOUCHING_JACKET: "standing_touching_jacket_pose",
  STANDING_ARMS_CROSSED: "standing_arms_crossed_pose",
  STANDING_THINKING: "standing_thinking",
  STANDING_HAND_RESTS_CHAIR: "standing_hand_rests_chair",



  

  
  // STANDING_ANGLED_AWAY: "standing_angled_away_pose",
  STANDING_HEAD_TILTED: "standing_head_tilted_pose",
  STANDING_SHOULDERS_TO_CAMERA: "standing_shoulders_to_camera_pose",
  STANDING_HEAD_ON_HAND: "standing_head_on_hand",
  STANDING_HANDS_ADJUSTING: "standing_hands_adjusting",
  STANDING_WALKS_FORWARD: "standing_walks_forward",
  STANDING_ARMS_LIFTED: "standing_arms_lifted",
  STANDING_LEANING_STOOL_EDGE: "standing_leaning_stool_edge",

  // SITTING_BENT_EXTENDED: "sitting_bent_extended_pose",
  SITTING_HANDS_ON_THIGHS: "sitting_hands_on_thighs_pose",
  SITTING_TORSO_FORWARD: "sitting_torso_forward_pose",
  SITTING_CROSSED_LEGS: "sitting_crossed_legs_pose",
  SITTING_ELBOWS_ON_KNEES: "sitting_elbows_on_knees_pose",
  SITTING_ARM_DRAPED_BACK: "sitting_arm_draped_back_pose",
  SITTING_RELAXED: "sitting_relaxed_pose",
  SITTING_TORSO_TWISTED: "sitting_torso_twisted_pose",
  SITTING_ELBOWS_RESTING: "sitting_elbows_resting_pose",
  SITTING_HEAD_ON_HAND: "sitting_head_on_hand",
  // SITTING_KNEE_ON_SEAT: "sitting_knee_on_seat",
  SITTING_ARMS_CROSSED: "sitting_arms_crossed",
  SITTING_SIDEWAYS: "sitting_sideways",
  SITTING_CHAIR_BACK: "sitting_chair_back",
  SITTING_LEG_CROSSED_RELAXED: "sitting_leg_crossed_relaxed",
  SITTING_THINKING_GESTUE: "sitting_thinking_gestue",
  SITTING_AGAINST_CHAIR_BACK: "sitting_against_chair_back",
  SITTING_LEANING_CHAIR_BACK: "sitting_leaning_chair_back",
  SITTING_HANDS_TOGETHER: "sitting_hands_together",

  SITTING_FLOOR_LEGS_EXTENDED: "sitting_floor_legs_extended",
  SITTING_FLOOR_ONE_LEG_ANGLE: "sitting_floor_one_leg_angle",


  STANDING_HANDS_RAISED_TO_NECK: "standing_hands_raised_to_neck",
  STANDING_HAND_WAIST_HAND_NEAR_FACE: "standing_hand_waist_hand_near_face",
  SITING_CROUCHING: "siting_crouching",
  STANDING_BENT_OVER_HEAD: "standing_bent_over_head",
  STANDING_HAND_HIDE_FACE: "standing_hand_hide_face",
  SITING_LEG_SURFACE_LEG_DOWNWARD: "siting_leg_surface_leg_downward",
}


export const POSE_LIST = [
  POSE_TYPE.STANDING_STRAIGHT,
  POSE_TYPE.STANDING_HAND_ON_HIP,
  POSE_TYPE.STANDING_LEANING,
  POSE_TYPE.STANDING_HEAD_TURN,
  POSE_TYPE.STANDING_DYNAMIC,
  POSE_TYPE.STANDING_CROSSED_LEGS,
  POSE_TYPE.STANDING_WALL_LEAN,
  POSE_TYPE.STANDING_CONTRAPPOSTO,
  POSE_TYPE.STANDING_HAND_IN_POCKET,
  POSE_TYPE.STANDING_CROSSED_ARMS,
  POSE_TYPE.STANDING_HANDS_ON_HIPS,

  // POSE_TYPE.STANDING_HANDS_CLASPED_AT_WAIST,
  POSE_TYPE.STANDING_TURN_AWAY,
  POSE_TYPE.STANDING_HAND_ADJUSTING,
  // POSE_TYPE.STANDING_HANDS_AT_FRONT,
  POSE_TYPE.STANDING_HANDS_BEHIND,
  POSE_TYPE.STANDING_HANDS_IN_POCKETS,
  POSE_TYPE.STANDING_HANDS_IN_POCKETS_HEAD_TILTED,
  POSE_TYPE.STANDING_WALKING_ILLUSION,
  POSE_TYPE.STANDING_BASE,
  POSE_TYPE.STANDING_BASE_BACK,
  POSE_TYPE.STANDING_BASE_LEFT,
  POSE_TYPE.STANDING_BASE_RIGHT,
  POSE_TYPE.STANDING_THREE_QUARTER,
  POSE_TYPE.STANDING_FEET_SHOULDER_WIDTH,
  POSE_TYPE.STANDING_TOUCHING_JACKET,
  POSE_TYPE.STANDING_ARMS_CROSSED,
  // POSE_TYPE.STANDING_ANGLED_AWAY,
  POSE_TYPE.STANDING_THINKING,
  POSE_TYPE.STANDING_HEAD_TILTED,
  POSE_TYPE.STANDING_SHOULDERS_TO_CAMERA,
  POSE_TYPE.STANDING_HEAD_ON_HAND,
  POSE_TYPE.STANDING_HANDS_ADJUSTING,
  POSE_TYPE.STANDING_WALKS_FORWARD,
  POSE_TYPE.STANDING_ARMS_LIFTED,
  POSE_TYPE.STANDING_LEANING_STOOL_EDGE,
  POSE_TYPE.STANDING_HAND_RESTS_CHAIR,

  // POSE_TYPE.SITTING_BENT_EXTENDED,
  POSE_TYPE.SITTING_HANDS_ON_THIGHS,
  POSE_TYPE.SITTING_TORSO_FORWARD,
  POSE_TYPE.SITTING_CROSSED_LEGS,
  POSE_TYPE.SITTING_ELBOWS_ON_KNEES,
  POSE_TYPE.SITTING_ARM_DRAPED_BACK,
  POSE_TYPE.SITTING_RELAXED,
  POSE_TYPE.SITTING_ELBOWS_RESTING,
  POSE_TYPE.SITTING_TORSO_TWISTED,

  POSE_TYPE.SITTING_HEAD_ON_HAND,
  // POSE_TYPE.SITTING_KNEE_ON_SEAT,
  POSE_TYPE.SITTING_ARMS_CROSSED,
  POSE_TYPE.SITTING_SIDEWAYS,
  POSE_TYPE.SITTING_CHAIR_BACK,
  POSE_TYPE.SITTING_LEG_CROSSED_RELAXED,
  POSE_TYPE.SITTING_THINKING_GESTUE,
  POSE_TYPE.SITTING_AGAINST_CHAIR_BACK,
  POSE_TYPE.SITTING_LEANING_CHAIR_BACK,
  POSE_TYPE.SITTING_HANDS_TOGETHER,

  POSE_TYPE.SITTING_FLOOR_LEGS_EXTENDED,
  POSE_TYPE.SITTING_FLOOR_ONE_LEG_ANGLE,

  // Woman
  POSE_TYPE.STANDING_HANDS_RAISED_TO_NECK,
  POSE_TYPE.STANDING_HAND_WAIST_HAND_NEAR_FACE,
  POSE_TYPE.SITING_CROUCHING,
  POSE_TYPE.STANDING_BENT_OVER_HEAD,
  POSE_TYPE.STANDING_HAND_HIDE_FACE,
  POSE_TYPE.SITING_LEG_SURFACE_LEG_DOWNWARD,
]

/*

Full-body shot of a female model with long light brown hair, 
wearing a beige structured pantsuit with double-breasted blazer and wide-leg trousers. 

She is wearing dark sunglasses and holding a small dark rectangular handbag. Her arms are crossed over her chest, and she is looking slightly to her left.
 
The background is a plain, light, neutral studio setting. Fashion catalog style photography, professional studio lighting."

*/

// export const USE_REFERENCE = {
//   NO: '',
//   YES: 'Use the attached reference image as the exact appearance reference for the subject, preserving facial features, bone structure, proportions, and overall likeness.'
// }

// export const PERSON = {
//   BASE: "A person, groomed hair, clean and polished appearance, calm and confident expression",
// }

// export const POSE = {
//   BASE: "Full-body standing pose with weight subtly shifted onto one leg, relaxed yet controlled posture, hands positioned at waist level, one hand gently adjusting the wrist or sleeve, natural body tension conveying confidence and elegance"
// }

// export const OUTFIT = {
//   BASE: "Minimalist tailored outfit with clean lines, fitted top and slim structured trousers, monochrome styling with no visible logos, refined contemporary fashion aesthetic. Elegant minimalist footwear with a clean silhouette, polished or matte finish, neutral tone matching the outfit"
// }

// export const LIGHTNING = {
//   STUDIO: "Soft professional studio lighting with gentle directional light shaping the body and fabric textures, subtle shadows, balanced exposure, refined editorial feel"
// }

// export const FRAMING = {
//   BASE: "Full-body framing, eye-level camera angle, professional fashion photography look, sharp focus, high resolution, subtle 85mm lens aesthetic, medium-format editorial impression"
// }

// export const BACKGROUND = {
//   BASE: "Minimalist studio setting with a seamless neutral background in soft light grey or off-white tones, clean and distraction-free environment emphasizing the figure"
// }

// export const COLOR_PALETTE = {
//   BASE: "Restrained neutral palette with monochrome or tonal harmony, soft greys, blacks, beiges or muted fashion tones, elegant and timeless color grading"
// }

// export const QUALITY = {
//   BASE: "Luxury fashion editorial portrait, high-end studio fashion photography, minimalist premium campaign image. High-end editorial fashion photography, premium brand aesthetic, ultra-clean composition, realistic textures, no text, no logos, no props"
// }

/**
 * 














 */