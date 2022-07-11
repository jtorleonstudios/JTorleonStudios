var path = require("path");
var fs = require("fs");

var TEMPLATE_HTML = "";
var BINDED_DATA = [];
var BIND = function () {
  console.debug("start process bind");
  try {
    TEMPLATE_HTML = fs.readFileSync(path.resolve(__dirname, "./gen/template.html"), 'utf8');
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }


  /* Register mod: Library Ferret */
  BINDED_DATA.push(createModInfo("library_ferret", "Library Ferret",
    "https://media.forgecdn.net/avatars/564/569/637921115622422234.png",
    "https://gitlab.com/scs_torleon/libraryferret/-/issues",
    "https://github.com/jtorleonstudios/HUB-Library-Ferret/issues"
  ));

  /* Register mod: Awesome Dungeon */
  BINDED_DATA.push(createModInfo("awesome_dungeon", "Awesome Dungeon",
    "https://media.forgecdn.net/attachments/458/189/bh_ad_cabe.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon/issues"
  ));

  /* Register mod: Awesome Dungeon Nether edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_nether", "Awesome Dungeon Nether edion",
    "https://media.forgecdn.net/attachments/458/192/bh_ad_nether.png",
    "https://gitlab.com/scs_torleon/awesome-dungeon-nether/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-Nether/issues"
  ));

  /* Register mod: Awesome Dungeon Ocean edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_ocean", "Awesome Dungeon Ocean edion",
    "https://media.forgecdn.net/attachments/458/193/bh_ad_ocean.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon-ocean/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-Ocean/issues"
  ));

  /* Register mod: Awesome Dungeon The End edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_theend", "Awesome Dungeon The End edion",
    "https://media.forgecdn.net/attachments/458/190/bh_ad_end.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon-the-end/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-The-End/issues"
  ));

  /* Register mod: Awesome Flooring */
  BINDED_DATA.push(createModInfo("awesome_flooring", "Awesome Flooring",
    "https://media.forgecdn.net/avatars/479/462/637776896396790899.png",
    "https://gitlab.com/scs_torleon/hub-awesome-flooring/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Flooring/issues"
  ));

  /* Register mod: Better Command Block Editor */
  BINDED_DATA.push(createModInfo("better_commandblock", "Better Command Block Editor",
    "https://media.forgecdn.net/attachments/417/273/nextprevious.png",
    "https://gitlab.com/scs_torleon/ide-better-command-block/-/issues",
    "https://github.com/jtorleonstudios/HUB-Better-Command-Block-Editor/issues"
  ));

  /* Register mod: Better Villages */
  BINDED_DATA.push(createModInfo("better_villages", "Better Villages",
    "https://media.forgecdn.net/attachments/473/386/snow_2.png",
    "https://gitlab.com/scs_torleon/better-village/-/issues",
    "https://github.com/jtorleonstudios/HUB-Better-Villages/issues"
  ));

  /* Register mod: Easy Loading Screen */
  BINDED_DATA.push(createModInfo("custom_loading_screen", "Easy Loading Screen",
    "https://media.forgecdn.net/attachments/434/171/mylogo.png",
    "https://gitlab.com/scs_torleon/hub-easy-loading-screen/-/issues",
    "https://github.com/jtorleonstudios/HUB-Easy-loading-screen/issues"
  ));

  /* Register mod: Dimension Sculk */
  BINDED_DATA.push(createModInfo("dimension_sculk", "Dimension Sculk",
    "https://media.forgecdn.net/attachments/448/178/preview_dimension.png",
    "https://gitlab.com/scs_torleon/hub-dimension-sculk/-/issues",
    "https://github.com/jtorleonstudios/HUB-Dimension-Sculk/issues"
  ));

  /* Register mod: Dungeon Clusters */
  BINDED_DATA.push(createModInfo("dungeon_clusters", "Dungeon Clusters",
    "https://media.forgecdn.net/avatars/469/77/637753923573119580.png",
    "https://gitlab.com/scs_torleon/hub-dungeon-vanilla-plus/-/issues",
    "https://github.com/jtorleonstudios/HUB-Dungeon-Clusters/issues"
  ));

  /* Register mod: Egg to capture mob */
  BINDED_DATA.push(createModInfo("egg_to_Capture_mob", "Egg to capture mob",
    "https://media.forgecdn.net/attachments/435/695/advancement.png",
    "https://gitlab.com/scs_torleon/egg-to-capture-mob/-/issues",
    "https://github.com/jtorleonstudios/HUB-Egg-to-Capture-mob/issues"
  ));

  /* Register mod: Escape Rope - Item Pokemon */
  BINDED_DATA.push(createModInfo("escape_rope", "Escape Rope - Item Pokemon",
    "https://media.forgecdn.net/avatars/440/305/637688663725881497.png",
    "https://gitlab.com/scs_torleon/hub-escape-rope/-/issues",
    "https://github.com/jtorleonstudios/HUB-Escape-rope/issues"
  ));

  /* Register mod: Extended Noteblock */
  BINDED_DATA.push(createModInfo("extended_noteblock", "Extended Noteblock",
    "https://media.forgecdn.net/avatars/445/281/637700989530977572.png",
    "https://gitlab.com/scs_torleon/hub-extended-noteblock/-/issues",
    "https://github.com/jtorleonstudios/HUB-Extended-Noteblock/issues"
  ));

  /* Register mod: Medieval Entity */
  BINDED_DATA.push(createModInfo("medieval_entity", "Medieval Entity",
    "https://media.forgecdn.net/attachments/412/793/fejscsmwyai8g_b.png",
    "https://gitlab.com/scs_torleon/hub-mediaval-entity/-/issues",
    "https://github.com/jtorleonstudios/HUB-Medieval-entity/issues"
  ));

  /* Register mod: Ring Of Prospecting */
  BINDED_DATA.push(createModInfo("ring_prospecting", "Ring Of Prospecting",
    "https://media.forgecdn.net/attachments/475/268/allrings_v1.png",
    "https://gitlab.com/scs_torleon/hub-ore-prospecting-stick/-/issues",
    "https://github.com/jtorleonstudios/HUB-Ring-Prospecting/issues"
  ));

  /* Register mod: WorldEdit Express Keybinding */
  BINDED_DATA.push(createModInfo("worldedit_express", "WorldEdit Express Keybinding",
    "https://media.forgecdn.net/avatars/564/569/637921115622422234.png",
    "https://gitlab.com/scs_torleon/hub-worldedit-express/-/issues",
    "https://github.com/jtorleonstudios/HUB-WorldEdit-Express-Keybinding/issues"
  ));

  console.debug(" TEMPLATE_HTML.length: " + TEMPLATE_HTML.length);
  console.debug(" BINDED_DATA.length: " + BINDED_DATA.length);
  console.debug("end process bind");
};

module.exports = function (Grunt) {
  var DIST = "./";
  Grunt.initConfig({
    pkg: Grunt.file.readJSON("package.json"),
    /* Delete old HTML generated */
    clean: [DIST + "*.html", DIST + "*.css"],

    /* Clean all html */
    htmlmin: { prod: { options: { removeComments: true, collapseWhitespace: true }, files: [{ src: ['*.html', '*.html'], expand: true, cwd: DIST, dest: DIST }] } },
    cssmin: { options: { mergeIntoShorthands: false, roundingPrecision: -1 }, target: { files: { 'style.css': ['./gen/style.css', './style.css'] } } }
  });

  Grunt.registerTask("bind", "setup variable", BIND);
  Grunt.loadNpmTasks("grunt-contrib-clean");
  Grunt.loadNpmTasks('grunt-contrib-htmlmin');
  Grunt.loadNpmTasks('grunt-contrib-cssmin');

  Grunt.loadNpmTasks('grunt-contrib-copy');

  Grunt.registerTask("generateHTML", "build html view", function () {
    generateBridgeModIssues(BINDED_DATA, DIST);
  });

  Grunt.registerTask("default", "default entry", function () {
    Grunt.task.run("bind");
    Grunt.task.run("clean");
    Grunt.task.run("generateHTML");
    Grunt.task.run('htmlmin');
    Grunt.task.run('cssmin');
  });
};

/**
 * @param { String } nameFile
 * @param { String } displayName
 * @param { String } displayImage
 * @param { String } hrefGitLab
 * @param { String } hrefGitHub
 * @returns ```js
 * {
 *   nameFile: "nameFile",
 *   displayName: "displayName",
 *   displayImage: "displayImage",
 *   hrefGitLab: "hrefGitLab",
 *   hrefGitHub: "hrefGitHub",
 * }
 * ```
 */
function createModInfo(nameFile, displayName, displayImage, hrefGitLab, hrefGitHub) {
  if (!hrefGitLab.includes("gitlab")) throw new Error("Invalide issue url for gitlab");
  if (!hrefGitHub.includes("github")) throw new Error("Invalide issue url for gitlab");
  return {
    nameFile: nameFile,
    displayName: displayName,
    displayImage: displayImage,
    hrefGitLab: hrefGitLab,
    hrefGitHub: hrefGitHub,
  };
}

function generateBridgeModIssues(arrayModInformations, output) {
  var PATTERN_BIND_MOD_DISPLAY_NAME = "{{ BIND_MOD_DISPLAY_NAME }}";
  var PATTERN_BIND_MOD_DISPLAY_IMAGE = "{{ BIND_MOD_DISPLAY_IMAGE }}";
  var PATTERN_BIND_HREF_GITLAB = "{{ BIND_HREF_GITLAB }}";
  var PATTERN_BIND_HREF_GITHUB = "{{ BIND_HREF_GITHUB }}";
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_MOD_DISPLAY_NAME)) throw new Error("Invalide template html, not found pattern display name");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_MOD_DISPLAY_IMAGE)) throw new Error("Invalide template html, not found pattern display image");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_HREF_GITLAB)) throw new Error("Invalide template html, not found pattern href GitLab");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_HREF_GITHUB)) throw new Error("Invalide template html, not found pattern href GitHub");

  arrayModInformations.forEach(function (item) {
    try {
      fs.writeFileSync(path.resolve(output, item.nameFile + ".html"),
        TEMPLATE_HTML
          .replace(new RegExp(PATTERN_BIND_MOD_DISPLAY_NAME, "g"), item.displayName)
          .replace(new RegExp(PATTERN_BIND_MOD_DISPLAY_IMAGE, "g"), item.displayImage)
          .replace(new RegExp(PATTERN_BIND_HREF_GITLAB, "g"), item.hrefGitLab)
          .replace(new RegExp(PATTERN_BIND_HREF_GITHUB, "g"), item.hrefGitHub)
      );
    } catch (e) {
      console.error(e);
    }
  });
}