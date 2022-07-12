const path = require("path");
const fs = require("fs");
const puppeteer = require('puppeteer');

let TEMPLATE_HTML = "", TEMPLATE_INDEX = "";
let BINDED_DATA = [];
let BIND = () => {
  console.debug("start process bind");
  try {
    TEMPLATE_INDEX = fs.readFileSync(path.resolve(__dirname, "./gen/index.html"), 'utf8');
    TEMPLATE_HTML = fs.readFileSync(path.resolve(__dirname, "./gen/template.html"), 'utf8');
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }

  /* Register mod: Library Ferret */
  BINDED_DATA.push(createModInfo("library_ferret", "Library Ferret",
    "https://media.forgecdn.net/avatars/564/569/637921115622422234.png",
    "https://gitlab.com/scs_torleon/libraryferret/-/issues",
    "https://github.com/jtorleonstudios/HUB-Library-Ferret/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/library-ferret-forge",
      "https://www.curseforge.com/minecraft/mc-mods/library-ferret-fabric"
    ]
  ));

  /* Register mod: Awesome Dungeon */
  BINDED_DATA.push(createModInfo("awesome_dungeon", "Awesome Dungeon",
    "https://media.forgecdn.net/attachments/458/189/bh_ad_cabe.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-forge",
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-fabric",
      "https://www.curseforge.com/minecraft/texture-packs/awesome-dungeon-datapack"
    ]
  ));

  /* Register mod: Awesome Dungeon Nether edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_nether", "Awesome Dungeon Nether edion",
    "https://media.forgecdn.net/attachments/458/192/bh_ad_nether.png",
    "https://gitlab.com/scs_torleon/awesome-dungeon-nether/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-Nether/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-nether-forge",
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-nether-fabric",
      "https://www.curseforge.com/minecraft/texture-packs/awesome-dungeon-nether-edition-datapack"
    ]
  ));

  /* Register mod: Awesome Dungeon Ocean edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_ocean", "Awesome Dungeon Ocean edion",
    "https://media.forgecdn.net/attachments/458/193/bh_ad_ocean.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon-ocean/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-Ocean/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-edition-ocean-forge",
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-edition-ocean-fabric"
    ]
  ));

  /* Register mod: Awesome Dungeon The End edion */
  BINDED_DATA.push(createModInfo("awesome_dungeon_theend", "Awesome Dungeon The End edion",
    "https://media.forgecdn.net/attachments/458/190/bh_ad_end.png",
    "https://gitlab.com/scs_torleon/hub-awesome-dungeon-the-end/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Dungeon-The-End/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-the-end-forge",
      "https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-the-end-fabric",
      "https://www.curseforge.com/minecraft/texture-packs/awesome-dungeon-the-end-edition-datapack"
    ]
  ));

  /* Register mod: Awesome Flooring */
  BINDED_DATA.push(createModInfo("awesome_flooring", "Awesome Flooring",
    "https://media.forgecdn.net/avatars/479/462/637776896396790899.png",
    "https://gitlab.com/scs_torleon/hub-awesome-flooring/-/issues",
    "https://github.com/jtorleonstudios/HUB-Awesome-Flooring/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/awesome-flooring-forge",
      "https://www.curseforge.com/minecraft/mc-mods/awesome-flooring-fabric"
    ]

  ));

  /* Register mod: Better Command Block Editor */
  BINDED_DATA.push(createModInfo("better_commandblock", "Better Command Block Editor",
    "https://media.forgecdn.net/attachments/417/273/nextprevious.png",
    "https://gitlab.com/scs_torleon/ide-better-command-block/-/issues",
    "https://github.com/jtorleonstudios/HUB-Better-Command-Block-Editor/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/ide-better-command-block-forge-editor",
      "https://www.curseforge.com/minecraft/mc-mods/ide-better-command-block-fabric-editor"
    ]
  ));

  /* Register mod: Better Villages */
  BINDED_DATA.push(createModInfo("better_villages", "Better Villages",
    "https://media.forgecdn.net/attachments/473/386/snow_2.png",
    "https://gitlab.com/scs_torleon/better-village/-/issues",
    "https://github.com/jtorleonstudios/HUB-Better-Villages/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/better-village-fabric",
      "https://www.curseforge.com/minecraft/mc-mods/better-village-forge",
      "https://www.curseforge.com/minecraft/texture-packs/better-villages"
    ]
  ));

  /* Register mod: Easy Loading Screen */
  BINDED_DATA.push(createModInfo("custom_loading_screen", "Easy Loading Screen",
    "https://media.forgecdn.net/attachments/434/171/mylogo.png",
    "https://gitlab.com/scs_torleon/hub-easy-loading-screen/-/issues",
    "https://github.com/jtorleonstudios/HUB-Easy-loading-screen/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/easy-loading-screen-forge",
      "https://www.curseforge.com/minecraft/mc-mods/easy-loading-screen-fabric"
    ]
  ));

  /* Register mod: Dimension Sculk */
  BINDED_DATA.push(createModInfo("dimension_sculk", "Dimension Sculk",
    "https://media.forgecdn.net/attachments/448/178/preview_dimension.png",
    "https://gitlab.com/scs_torleon/hub-dimension-sculk/-/issues",
    "https://github.com/jtorleonstudios/HUB-Dimension-Sculk/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/dimension-sculk-fabric",
      "https://www.curseforge.com/minecraft/mc-mods/dimension-sculk-forge"
    ]
  ));

  /* Register mod: Dungeon Clusters */
  BINDED_DATA.push(createModInfo("dungeon_clusters", "Dungeon Clusters",
    "https://media.forgecdn.net/avatars/469/77/637753923573119580.png",
    "https://gitlab.com/scs_torleon/hub-dungeon-vanilla-plus/-/issues",
    "https://github.com/jtorleonstudios/HUB-Dungeon-Clusters/issues",

    [
      "https://www.curseforge.com/minecraft/mc-mods/dungeon-vanilla-clusters-plus-forge",
      "https://www.curseforge.com/minecraft/mc-mods/dungeon-vanilla-clusters-plus-fabric",
      "https://www.curseforge.com/minecraft/texture-packs/dungeon-clusters"
    ]

  ));

  /* Register mod: Egg to capture mob */
  BINDED_DATA.push(createModInfo("egg_to_Capture_mob", "Egg to capture mob",
    "https://media.forgecdn.net/attachments/435/695/advancement.png",
    "https://gitlab.com/scs_torleon/egg-to-capture-mob/-/issues",
    "https://github.com/jtorleonstudios/HUB-Egg-to-Capture-mob/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/egg-to-capture-mob-forge",
      "https://www.curseforge.com/minecraft/mc-mods/egg-to-capture-mob-fabric"
    ]
  ));

  /* Register mod: Escape Rope - Item Pokemon */
  BINDED_DATA.push(createModInfo("escape_rope", "Escape Rope - Item Pokemon",
    "https://media.forgecdn.net/avatars/440/305/637688663725881497.png",
    "https://gitlab.com/scs_torleon/hub-escape-rope/-/issues",
    "https://github.com/jtorleonstudios/HUB-Escape-rope/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/escape-rope-pokemon-item-forge",
      "https://www.curseforge.com/minecraft/mc-mods/escape-rope-pokemon-item-fabric"
    ]
  ));

  /* Register mod: Extended Noteblock */
  BINDED_DATA.push(createModInfo("extended_noteblock", "Extended Noteblock",
    "https://media.forgecdn.net/avatars/445/281/637700989530977572.png",
    "https://gitlab.com/scs_torleon/hub-extended-noteblock/-/issues",
    "https://github.com/jtorleonstudios/HUB-Extended-Noteblock/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/extended-noteblock-fabric",
      "https://www.curseforge.com/minecraft/mc-mods/extended-noteblock-forge"
    ]
  ));

  /* Register mod: Medieval Entity */
  BINDED_DATA.push(createModInfo("medieval_entity", "Medieval Entity",
    "https://media.forgecdn.net/attachments/412/793/fejscsmwyai8g_b.png",
    "https://gitlab.com/scs_torleon/hub-mediaval-entity/-/issues",
    "https://github.com/jtorleonstudios/HUB-Medieval-entity/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/medievial-entity-forge",
      "https://www.curseforge.com/minecraft/mc-mods/medievial-entity-fabric"
    ]
  ));

  /* Register mod: Ring Of Prospecting */
  BINDED_DATA.push(createModInfo("ring_prospecting", "Ring Of Prospecting",
    "https://media.forgecdn.net/attachments/475/268/allrings_v1.png",
    "https://gitlab.com/scs_torleon/hub-ore-prospecting-stick/-/issues",
    "https://github.com/jtorleonstudios/HUB-Ring-Prospecting/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/ore-prospecting-stick-forge",
      "https://www.curseforge.com/minecraft/mc-mods/ore-prospecting-stick-fabric"
    ]
  ));

  /* Register mod: WorldEdit Express Keybinding */
  BINDED_DATA.push(createModInfo("worldedit_express", "WorldEdit Express Keybinding",
    "https://media.forgecdn.net/avatars/564/569/637921115622422234.png",
    "https://gitlab.com/scs_torleon/hub-worldedit-express/-/issues",
    "https://github.com/jtorleonstudios/HUB-WorldEdit-Express-Keybinding/issues",
    [
      "https://www.curseforge.com/minecraft/mc-mods/worldedit-express-forge",
      "https://www.curseforge.com/minecraft/mc-mods/worldedit-express-fabric"
    ]
  ));

  console.debug(" TEMPLATE_HTML.length: " + TEMPLATE_HTML.length);
  console.debug(" BINDED_DATA.length: " + BINDED_DATA.length);
  console.debug("end process bind");
};

module.exports = (Grunt) => {
  let DIST = "./";
  Grunt.initConfig({
    pkg: Grunt.file.readJSON("package.json"),
    /* Delete old HTML generated */
    clean: [`${DIST}*.html`, `${DIST}*.css`],

    /* Clean all html */
    htmlmin: { prod: { options: { removeComments: true, collapseWhitespace: true }, files: [{ src: ['*.html', '*.html'], expand: true, cwd: DIST, dest: DIST }] } },
    cssmin: { options: { mergeIntoShorthands: false, roundingPrecision: -1 }, target: { files: { 'style.css': ['./gen/style.css', './style.css'] } } }
  });

  Grunt.registerTask("bind", "setup letiable", BIND);
  Grunt.loadNpmTasks("grunt-contrib-clean");
  Grunt.loadNpmTasks('grunt-contrib-htmlmin');
  Grunt.loadNpmTasks('grunt-contrib-cssmin');

  Grunt.loadNpmTasks('grunt-contrib-copy');

  Grunt.registerTask("generateHTML", "build html view", () => {
    generateBridgeModIssues(BINDED_DATA, DIST);
  });

  Grunt.registerTask("async_puppeter", "test link", function () {
    var done = this.async();
    let issuesURLforTest = [];
    let projectsURLforTest = [];
    BINDED_DATA.forEach(function (item) {
      issuesURLforTest.push(item.hrefGitHub, item.hrefGitLab);
      projectsURLforTest.push({
        nameFile: item.nameFile,
        hrefCurseforges: item.hrefCurseforges
      });
    });
    testPuputer(issuesURLforTest, projectsURLforTest, done);
  });

  Grunt.registerTask("test", "test entry", () => {
    Grunt.task.run("bind");
    Grunt.task.run("async_puppeter");
  });

  Grunt.registerTask("default", "default entry", () => {
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
 *   hrefCurseforges: [ "url", "url" ... ]
 * }
 * ```
 */
function createModInfo(nameFile, displayName, displayImage, hrefGitLab, hrefGitHub, hrefCurseforges = []) {
  if (!hrefGitLab.includes("gitlab")) throw new Error("Invalide issue url for gitlab");
  if (!hrefGitHub.includes("github")) throw new Error("Invalide issue url for gitlab");
  return {
    nameFile: nameFile,
    displayName: displayName,
    displayImage: displayImage,
    hrefGitLab: hrefGitLab,
    hrefGitHub: hrefGitHub,
    hrefCurseforges: hrefCurseforges
  };
}

function generateBridgeModIssues(arrayModInformations, output) {
  let PATTERN_BIND_LIST_MODS = "{{ BIND_LIST_MODS }}", listMods = "";
  let PATTERN_BIND_MOD_DISPLAY_NAME = "{{ BIND_MOD_DISPLAY_NAME }}";
  let PATTERN_BIND_MOD_DISPLAY_IMAGE = "{{ BIND_MOD_DISPLAY_IMAGE }}";
  let PATTERN_BIND_HREF_GITLAB = "{{ BIND_HREF_GITLAB }}";
  let PATTERN_BIND_HREF_GITHUB = "{{ BIND_HREF_GITHUB }}";
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_MOD_DISPLAY_NAME)) throw new Error("Invalide template html, not found pattern display name");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_MOD_DISPLAY_IMAGE)) throw new Error("Invalide template html, not found pattern display image");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_HREF_GITLAB)) throw new Error("Invalide template html, not found pattern href GitLab");
  if (!TEMPLATE_HTML.includes(PATTERN_BIND_HREF_GITHUB)) throw new Error("Invalide template html, not found pattern href GitHub");
  if (!TEMPLATE_INDEX.includes(PATTERN_BIND_LIST_MODS)) throw new Error("Invalide index html, not found pattern list mods");

  arrayModInformations.forEach(function (item) {
    try {
      fs.writeFileSync(path.resolve(output, item.nameFile + ".html"),
        TEMPLATE_HTML
          .replace(new RegExp(PATTERN_BIND_MOD_DISPLAY_NAME, "g"), item.displayName)
          .replace(new RegExp(PATTERN_BIND_MOD_DISPLAY_IMAGE, "g"), item.displayImage)
          .replace(new RegExp(PATTERN_BIND_HREF_GITLAB, "g"), item.hrefGitLab)
          .replace(new RegExp(PATTERN_BIND_HREF_GITHUB, "g"), item.hrefGitHub)
      );
      listMods += "<li><a href='" + item.nameFile + ".html' title='open bridge issue'>" + item.displayName + "</a></li>";
    } catch (e) {
      console.error(e);
    }
  });

  try {
    fs.writeFileSync(path.resolve(output, "index.html"), TEMPLATE_INDEX.replace(new RegExp(PATTERN_BIND_LIST_MODS, "g"), listMods));
  } catch (error) {
    console.error(e);
  }

}

async function testPuputer(URLs, projectsURLforTest, done) {
  console.debug("test puputer");
  // start browser
  const instanceBrowser = await puppeteer.launch({ args: ['--lang=en-GB,en'] }).catch((e) => {
    console.error(e);
    process.exit(-1);
  });
  // Create new page
  const instancePage = await instanceBrowser.newPage().catch((e) => {
    console.error(e);
    process.exit(-1);
  });
  // randomize view port
  await instancePage.setViewport({
    width: 1920 + Math.floor(Math.random() * 100), height: 3000 + Math.floor(Math.random() * 100),
    deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false,
    isMobile: false,
  }).catch((e) => {
    console.error(e);
    process.exit(-1);
  });
  // user agent from chrome
  await instancePage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36")
    .catch((e) => {
      console.error(e);
      process.exit(-1);
    });
  // SET ENGLISH
  await instancePage.setExtraHTTPHeaders({
    'Accept-Language': 'en'
  });

  for (const url of URLs) {
    let catchError = false;
    await instancePage
      .goto(url)
      .catch((e) => {
        console.warn(`error, invalide data for: ${url}`);
        console.error(e);
      });

    if (!catchError) {
      let valideEvaluate = await instancePage
        .evaluate(() => {
          if (window.location.href.includes("gitlab") || window.location.href.includes("github")) {
            let k = document.querySelectorAll(`a[href*="${window.location.pathname}"]`);
            return k ? k.length > 0 : false;
          } else {
            return "error, Invalide URL !!!";
          }
        })
        .catch((e) => {
          console.warn(`error, invalide data for: ${url}`);
          console.error(e);
        });

      console.warn(`${valideEvaluate ? "success" : "error"} url: ${url}`);
    }
  }

  for (const projectURL of projectsURLforTest) {
    for (const url of projectURL.hrefCurseforges) {
      let catchError = false;
      await instancePage
        .goto(url)
        .catch((e) => {
          console.warn(`${projectURL.nameFile}: invalide project url: ${url}`);
          console.error(e);
        });
      if (!catchError) {
        let hrefIssueOnPageViseted = await instancePage
          .evaluate(() => {
            let k = document.querySelector("#nav-issues-svg-class-icon-icon-offsite-nav-viewbox-0-0 a");
            return k ? k.href : "";
          })
          .catch((e) => {
            console.warn(`error ${projectURL.nameFile}: invalide project url ${url}`);
            console.error(e);
          });
        if (hrefIssueOnPageViseted !== `https://jtorleonstudios.github.io/JTorleonStudios/${projectURL.nameFile}.html`) {
          console.warn(`error ${projectURL.nameFile}: no match href issues on curseforge ${url}`);
        } else {
          console.warn(`success ${projectURL.nameFile}: match href issues on curseforge ${url}`);
        }
      }
    }
  }

  // CLOSE INSTANCE
  await instanceBrowser.close()
    .catch((e) => {
      console.error(e);
      process.exit(-1);
    });

  done(true);
}
