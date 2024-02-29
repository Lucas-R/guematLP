document.addEventListener('DOMContentLoaded', () => {
    const listFloorsSKU = [
        { "sku": "G4F3WZWY3", "boxMeter": 2.56},
        { "sku": "4MB29NBZ4", "boxMeter": 1.87},
        { "sku" : "6617", "boxMeter" : 2.14},
        { "sku" : "6618", "boxMeter" : 2.14},
        { "sku" : "6615", "boxMeter" : 2.36},
        { "sku" : "15784", "boxMeter" : 1.92},
        { "sku" : "51571", "boxMeter" : 2.32},
        { "sku" : "131071", "boxMeter" : 1.64},
        { "sku" : "131061", "boxMeter" : 2.25},
        { "sku" : "131051", "boxMeter" : 2.25},
        { "sku" : "131041", "boxMeter" : 2.56},
        { "sku" : "131021", "boxMeter" : 2.03},
        { "sku" : "131011", "boxMeter" : 2.03},
        { "sku" : "130961", "boxMeter" : 2.03},
        { "sku" : "130941", "boxMeter" : 2.03},
        { "sku" : "130931", "boxMeter" : 1.95},
        { "sku" : "130921", "boxMeter" : 2.2},
        { "sku" : "130911", "boxMeter" : 2.2},
        { "sku" : "130901", "boxMeter" : 2.2},
        { "sku" : "130891", "boxMeter" : 2.33},
        { "sku" : "130861", "boxMeter" : 2.33},
        { "sku" : "130851", "boxMeter" : 2.27},
        { "sku" : "130841", "boxMeter" : 2.27},
        { "sku" : "14529", "boxMeter" : 2.58},
        { "sku" : "14530", "boxMeter" : 2.58},
        { "sku" : "14551", "boxMeter" : 2.58},
        { "sku" : "14552", "boxMeter" : 2.58},
        { "sku" : "14562", "boxMeter" : 2.2},
        { "sku" : "14565", "boxMeter" : 2.2},
        { "sku" : "14566", "boxMeter" : 2.2},
        { "sku" : "14568", "boxMeter" : 2.2},
        { "sku" : "14573", "boxMeter" : 2.2},
        { "sku" : "14576", "boxMeter" : 2.2},
        { "sku" : "14575", "boxMeter" : 2.2},
        { "sku" : "14577", "boxMeter" : 2.2},
        { "sku" : "14750", "boxMeter" : 1.87},
        { "sku" : "14754", "boxMeter" : 1.87},
        { "sku" : "14755", "boxMeter" : 1.87},
        { "sku" : "14756", "boxMeter" : 1.87},
        { "sku" : "14758", "boxMeter" : 1.87},
        { "sku" : "14761", "boxMeter" : 1.87},
        { "sku" : "14762", "boxMeter" : 1.87},
        { "sku" : "14763", "boxMeter" : 1.87},
        { "sku" : "14765", "boxMeter" : 1.87},
        { "sku" : "14767", "boxMeter" : 1.87},
        { "sku" : "14769", "boxMeter" : 1.87},
        { "sku" : "14770", "boxMeter" : 1.87},
        { "sku" : "14771", "boxMeter" : 1.87},
        { "sku" : "14773", "boxMeter" : 1.87},
        { "sku" : "14774", "boxMeter" : 1.87},
        { "sku" : "14775", "boxMeter" : 1.87},
        { "sku" : "14776", "boxMeter" : 1.87},
        { "sku" : "14777", "boxMeter" : 1.87},
        { "sku" : "14779", "boxMeter" : 1.87},
        { "sku" : "14780", "boxMeter" : 1.87},
        { "sku" : "14845", "boxMeter" : 1.49},
        { "sku" : "14847", "boxMeter" : 1.49},
        { "sku" : "14848", "boxMeter" : 1.49},
        { "sku" : "14850", "boxMeter" : 1.47},
        { "sku" : "14865", "boxMeter" : 2.02},
        { "sku" : "14867", "boxMeter" : 2.02},
        { "sku" : "14868", "boxMeter" : 2.02},
        { "sku" : "14870", "boxMeter" : 2.05},
        { "sku" : "15732", "boxMeter" : 2.08},
        { "sku" : "15735", "boxMeter" : 2},
        { "sku" : "15740", "boxMeter" : 2},
        { "sku" : "15741", "boxMeter" : 2},
        { "sku" : "15744", "boxMeter" : 1.76},
        { "sku" : "15771", "boxMeter" : 1.52},
        { "sku" : "15772", "boxMeter" : 1.52},
        { "sku" : "15774", "boxMeter" : 1.52},
        { "sku" : "35831", "boxMeter" : 2.43},
        { "sku" : "35981", "boxMeter" : 2.43},
        { "sku" : "37362", "boxMeter" : 2.43},
        { "sku" : "38122", "boxMeter" : 2.43},
        { "sku" : "38132", "boxMeter" : 2.43},
        { "sku" : "38152", "boxMeter" : 2.34},
        { "sku" : "39291", "boxMeter" : 2.58},
        { "sku" : "41412", "boxMeter" : 2.43},
        { "sku" : "41422", "boxMeter" : 2.81},
        { "sku" : "41442", "boxMeter" : 2.81},
        { "sku" : "41492", "boxMeter" : 2.27},
        { "sku" : "41532", "boxMeter" : 2.08},
        { "sku" : "41562", "boxMeter" : 2.34},
        { "sku" : "41572", "boxMeter" : 3.02},
        { "sku" : "41582", "boxMeter" : 2.28},
        { "sku" : "44051", "boxMeter" : 2.52},
        { "sku" : "46241", "boxMeter" : 2.15},
        { "sku" : "49171", "boxMeter" : 2.34},
        { "sku" : "49181", "boxMeter" : 2.8},
        { "sku" : "49191", "boxMeter" : 2.8},
        { "sku" : "50711", "boxMeter" : 2.08},
        { "sku" : "51591", "boxMeter" : 2.58},
        { "sku" : "51651", "boxMeter" : 2.58},
        { "sku" : "51671", "boxMeter" : 2.08},
        { "sku" : "51681", "boxMeter" : 2.08},
        { "sku" : "53321", "boxMeter" : 2.02},
        { "sku" : "53331", "boxMeter" : 2.58},
        { "sku" : "53971", "boxMeter" : 1.87},
        { "sku" : "53981", "boxMeter" : 1.87},
        { "sku" : "53991", "boxMeter" : 2.67},
        { "sku" : "54031", "boxMeter" : 1.76},
        { "sku" : "54041", "boxMeter" : 2},
        { "sku" : "56061", "boxMeter" : 2},
        { "sku" : "54611", "boxMeter" : 2.73},
        { "sku" : "54621", "boxMeter" : 2.05},
        { "sku" : "58901", "boxMeter" : 2.02},
        { "sku" : "59041", "boxMeter" : 2.67},
        { "sku" : "59101", "boxMeter" : 2.58},
        { "sku" : "59111", "boxMeter" : 2.52},
        { "sku" : "61021", "boxMeter" : 1.52},
        { "sku" : "61181", "boxMeter" : 2.02},
        { "sku" : "62101", "boxMeter" : 2.8},
        { "sku" : "62111", "boxMeter" : 2.34},
        { "sku" : "62741", "boxMeter" : 2.58},
        { "sku" : "62751", "boxMeter" : 2.58},
        { "sku" : "65471", "boxMeter" : 2.58},
        { "sku" : "65631", "boxMeter" : 2.05},
        { "sku" : "65641", "boxMeter" : 2.67},
        { "sku" : "65661", "boxMeter" : 2.81},
        { "sku" : "65671", "boxMeter" : 2.81},
        { "sku" : "67271", "boxMeter" : 1.52},
        { "sku" : "67391", "boxMeter" : 1.87},
        { "sku" : "70251", "boxMeter" : 2.8},
        { "sku" : "70261", "boxMeter" : 2.73},
        { "sku" : "70271", "boxMeter" : 2.73},
        { "sku" : "73321", "boxMeter" : 3.02},
        { "sku" : "73711", "boxMeter" : 2.43},
        { "sku" : "73721", "boxMeter" : 2.58},
        { "sku" : "75851", "boxMeter" : 2.27},
        { "sku" : "78901", "boxMeter" : 2.02},
        { "sku" : "78911", "boxMeter" : 2.02},
        { "sku" : "78921", "boxMeter" : 2.95},
        { "sku" : "78961", "boxMeter" : 1.87},
        { "sku" : "78971", "boxMeter" : 1.38},
        { "sku" : "79371", "boxMeter" : 2.52},
        { "sku" : "79381", "boxMeter" : 2.52},
        { "sku" : "79621", "boxMeter" : 2.58},
        { "sku" : "79641", "boxMeter" : 2.81},
        { "sku" : "80311", "boxMeter" : 2.95},
        { "sku" : "80361", "boxMeter" : 2.26},
        { "sku" : "80681", "boxMeter" : 2.58},
        { "sku" : "83591", "boxMeter" : 2.05},
        { "sku" : "85471", "boxMeter" : 2.52},
        { "sku" : "85621", "boxMeter" : 2.52},
        { "sku" : "93931", "boxMeter" : 2.81},
        { "sku" : "93941", "boxMeter" : 2.34},
        { "sku" : "93971", "boxMeter" : 2.34},
        { "sku" : "98791", "boxMeter" : 2.08},
        { "sku" : "98801", "boxMeter" : 2.2},
        { "sku" : "117161", "boxMeter" : 2.2},
        { "sku" : "117401", "boxMeter" : 1.76},
        { "sku" : "117411", "boxMeter" : 2.2},
        { "sku" : "117831", "boxMeter" : 1.87},
        { "sku" : "117841", "boxMeter" : 1.87},
        { "sku" : "118281", "boxMeter" : 2.58},
        { "sku" : "118291", "boxMeter" : 2.30},
        { "sku" : "118301", "boxMeter" : 2.81},
        { "sku" : "118311", "boxMeter" : 2.81},
        { "sku" : "118321", "boxMeter" : 2.52},
        { "sku" : "120951", "boxMeter" : 1.52},
        { "sku" : "120981", "boxMeter" : 2.73},
        { "sku" : "126691", "boxMeter" : 2.62},
        { "sku" : "126701", "boxMeter" : 2.62},
        { "sku" : "126711", "boxMeter" : 2.62},
        { "sku" : "126731", "boxMeter" : 2.62},
        { "sku" : "126741", "boxMeter" : 2.62},
        { "sku" : "131811", "boxMeter" : 2.15},
        { "sku" : "131821", "boxMeter" : 2.15},
        { "sku" : "131831", "boxMeter" : 2.15},
        { "sku" : "131911", "boxMeter" : 2.73},
        { "sku" : "131921", "boxMeter" : 2.73},
        { "sku" : "135171", "boxMeter" : 1.87},
        { "sku" : "15832", "boxMeter" : 1.93},
        { "sku" : "58921", "boxMeter" : 2.07},
        { "sku" : "75991", "boxMeter" : 2.93},
        { "sku" : "126751", "boxMeter" : 2.19},
        { "sku" : "58981", "boxMeter" : 2.19},
        { "sku" : "14786", "boxMeter" : 2.19},
        { "sku" : "14788", "boxMeter" : 2.19},
        { "sku" : "61461", "boxMeter" : 2.19},
        { "sku" : "14790", "boxMeter" : 2.2},
        { "sku" : "14798", "boxMeter" : 2.25},
        { "sku" : "14799", "boxMeter" : 2.25},
        { "sku" : "14814", "boxMeter" : 2.02},
        { "sku" : "14815", "boxMeter" : 2.02},
        { "sku" : "14817", "boxMeter" : 2.02},
        { "sku" : "14818", "boxMeter" : 2.02},
        { "sku" : "14819", "boxMeter" : 2.02},
        { "sku" : "14820", "boxMeter" : 2.02},
        { "sku" : "14821", "boxMeter" : 2.02},
        { "sku" : "14822", "boxMeter" : 2.02},
        { "sku" : "14824", "boxMeter" : 2.02},
        { "sku" : "14827", "boxMeter" : 2.07},
        { "sku" : "14828", "boxMeter" : 2.07},
        { "sku" : "14830", "boxMeter" : 2.07},
        { "sku" : "38932", "boxMeter" : 2.2},
        { "sku" : "41132", "boxMeter" : 2.02},
        { "sku" : "41142", "boxMeter" : 2.07},
        { "sku" : "41152", "boxMeter" : 2.02},
        { "sku" : "41162", "boxMeter" : 2.02},
        { "sku" : "58911", "boxMeter" : 2.2},
        { "sku" : "145561", "boxMeter" : 2.21},
        { "sku" : "145571", "boxMeter" : 2.21},
        { "sku" : "145581", "boxMeter" : 2.16},
        { "sku" : "41832", "boxMeter" : 2.3},
        { "sku" : "58971", "boxMeter" : 2.19},
        { "sku" : "61431", "boxMeter" : 2.07},
        { "sku" : "61881", "boxMeter" : 2.07},
        { "sku" : "65541", "boxMeter" : 2.88},
        { "sku" : "65621", "boxMeter" : 2.93},
        { "sku" : "66271", "boxMeter" : 2.02},
        { "sku" : "85111", "boxMeter" : 2.88},
        { "sku" : "85381", "boxMeter" : 2.93},
        { "sku" : "85391", "boxMeter" : 2.93},
        { "sku" : "145951", "boxMeter" : 2.87},
        { "sku" : "135561", "boxMeter" : 2.87},
        { "sku" : "41642", "boxMeter" : 2.13},
        { "sku" : "41662", "boxMeter" : 1.68},
        { "sku" : "41672", "boxMeter" : 1.77},
        { "sku" : "41682", "boxMeter" : 1.77},
        { "sku" : "41842", "boxMeter" : 2.19},
        { "sku" : "41852", "boxMeter" : 2.21},
        { "sku" : "41862", "boxMeter" : 2.21},
        { "sku" : "41872", "boxMeter" : 2.21},
        { "sku" : "41882", "boxMeter" : 1.93},
        { "sku" : "41932", "boxMeter" : 2.07},
        { "sku" : "41942", "boxMeter" : 2.07},
        { "sku" : "59321", "boxMeter" : 1.68},
        { "sku" : "59331", "boxMeter" : 1.68},
        { "sku" : "59341", "boxMeter" : 1.68},
        { "sku" : "59351", "boxMeter" : 2.19},
        { "sku" : "60381", "boxMeter" : 1.68},
        { "sku" : "61901", "boxMeter" : 1.68},
        { "sku" : "62121", "boxMeter" : 1.77},
        { "sku" : "62231", "boxMeter" : 1.68},
        { "sku" : "62301", "boxMeter" : 2.13},
        { "sku" : "64141", "boxMeter" : 2.19},
        { "sku" : "64151", "boxMeter" : 2.13},
        { "sku" : "75921", "boxMeter" : 2.19},
        { "sku" : "78991", "boxMeter" : 1.77},
        { "sku" : "79001", "boxMeter" : 2.13},
        { "sku" : "85961", "boxMeter" : 2.19},
        { "sku" : "90971", "boxMeter" : 1.93},
        { "sku" : "90991", "boxMeter" : 1.93},
        { "sku" : "94211", "boxMeter" : 1.93},
        { "sku" : "94221", "boxMeter" : 1.93},
        { "sku" : "126151", "boxMeter" : 2.19},
        { "sku" : "126161", "boxMeter" : 2.19},
        { "sku" : "126171", "boxMeter" : 2.19},
        { "sku" : "126181", "boxMeter" : 2.19},
        { "sku" : "126251", "boxMeter" : 2.19},
        { "sku" : "149541", "boxMeter" : 2.13},
        { "sku" : "152711", "boxMeter" : 1.54},
        { "sku" : "152701", "boxMeter" : 1.54},
        { "sku" : "15841", "boxMeter" : 1.33},
        { "sku" : "15852", "boxMeter" : 1.68},
        { "sku" : "15860", "boxMeter" : 1.51},
        { "sku" : "15862", "boxMeter" : 1.34},
        { "sku" : "15864", "boxMeter" : 1.15},
        { "sku" : "15865", "boxMeter" : 1.15},
        { "sku" : "15866", "boxMeter" : 1.15},
        { "sku" : "41652", "boxMeter" : 2.53},
        { "sku" : "63761", "boxMeter" : 1.62},
        { "sku" : "63771", "boxMeter" : 1.51},
        { "sku" : "64541", "boxMeter" : 1.5},
        { "sku" : "67421", "boxMeter" : 2.53},
        { "sku" : "67451", "boxMeter" : 1.94},
        { "sku" : "75611", "boxMeter" : 1.88},
        { "sku" : "77261", "boxMeter" : 1.68},
        { "sku" : "78981", "boxMeter" : 1.62},
        { "sku" : "145781", "boxMeter" : 1.88},
        { "sku" : "145791", "boxMeter" : 1.88},
        { "sku" : "145801", "boxMeter" : 1.34},
        { "sku" : "145811", "boxMeter" : 1.58},
        { "sku" : "145821", "boxMeter" : 1.58},
        { "sku" : "15871", "boxMeter" : 1.95},
        { "sku" : "15872", "boxMeter" : 1.95},
        { "sku" : "15874", "boxMeter" : 1.95},
        { "sku" : "15886", "boxMeter" : 1.95},
        { "sku" : "15887", "boxMeter" : 1.95},
        { "sku" : "15926", "boxMeter" : 1.5},
        { "sku" : "156971", "boxMeter" : 2.88},
        { "sku" : "156981", "boxMeter" : 2.88},
        { "sku" : "156991", "boxMeter" : 2.88},
        { "sku" : "157001", "boxMeter" : 2.88},
        { "sku" : "157011", "boxMeter" : 2.88},
        { "sku" : "157021", "boxMeter" : 2.88},
        { "sku" : "157031", "boxMeter" : 2.88},
        { "sku" : "157041", "boxMeter" : 2.88},
        { "sku" : "157051", "boxMeter" : 2.88},
        { "sku" : "157061", "boxMeter" : 2.93},
        { "sku" : "157071", "boxMeter" : 2.93},
        { "sku" : "157081", "boxMeter" : 2.93},
        { "sku" : "157091", "boxMeter" : 2.93},
        { "sku" : "157101", "boxMeter" : 2.93},
        { "sku" : "157111", "boxMeter" : 2.93},
        { "sku" : "157121", "boxMeter" : 2.93},
        { "sku" : "157131", "boxMeter" : 2.93},
        { "sku" : "157141", "boxMeter" : 2.93},
        { "sku" : "157151", "boxMeter" : 2.2},
        { "sku" : "157161", "boxMeter" : 2.2},
        { "sku" : "157171", "boxMeter" : 2.2},
        { "sku" : "157181", "boxMeter" : 2.2},
        { "sku" : "157191", "boxMeter" : 2.2},
        { "sku" : "157201", "boxMeter" : 2.2},
        { "sku" : "157211", "boxMeter" : 2.2},
        { "sku" : "157221", "boxMeter" : 2.2},
        { "sku" : "157231", "boxMeter" : 2.2},
        { "sku" : "157241", "boxMeter" : 2.2},
        { "sku" : "157251", "boxMeter" : 2.2},
        { "sku" : "157261", "boxMeter" : 2.2},
        { "sku" : "157271", "boxMeter" : 2.2},
        { "sku" : "157281", "boxMeter" : 2.2},
        { "sku" : "157291", "boxMeter" : 2.2},
        { "sku" : "157301", "boxMeter" : 2.2},
        { "sku" : "157311", "boxMeter" : 2.2},
        { "sku" : "157321", "boxMeter" : 2.2},
        { "sku" : "157331", "boxMeter" : 2.2},
        { "sku" : "157341", "boxMeter" : 2.2},
        { "sku" : "157351", "boxMeter" : 2.2},
        { "sku" : "157361", "boxMeter" : 2.2},
        { "sku" : "157371", "boxMeter" : 2.2},
        { "sku" : "157381", "boxMeter" : 2.2},
        { "sku" : "157391", "boxMeter" : 2.2},
        { "sku" : "157411", "boxMeter" : 2.2},
        { "sku" : "157421", "boxMeter" : 2.2},
        { "sku" : "157431", "boxMeter" : 2.2},
        { "sku" : "157441", "boxMeter" : 2.2},
        { "sku" : "157451", "boxMeter" : 2.2},
        { "sku" : "157461", "boxMeter" : 2.2},
        { "sku" : "157471", "boxMeter" : 2.2},
        { "sku" : "157481", "boxMeter" : 2.2},
        { "sku" : "157491", "boxMeter" : 2.2},
        { "sku" : "157501", "boxMeter" : 2.2},
        { "sku" : "157511", "boxMeter" : 2.2},
        { "sku" : "157521", "boxMeter" : 2.25},
        { "sku" : "157531", "boxMeter" : 2.25},
        { "sku" : "157541", "boxMeter" : 2.25},
        { "sku" : "157551", "boxMeter" : 2.25},
        { "sku" : "157561", "boxMeter" : 2.25},
        { "sku" : "157571", "boxMeter" : 2.25},
        { "sku" : "157581", "boxMeter" : 2.25},
        { "sku" : "157591", "boxMeter" : 2.25},
        { "sku" : "157601", "boxMeter" : 2.25},
        { "sku" : "157611", "boxMeter" : 2.25},
        { "sku" : "157621", "boxMeter" : 2.25},
        { "sku" : "157631", "boxMeter" : 2.25},
        { "sku" : "157641", "boxMeter" : 2.25},
        { "sku" : "157651", "boxMeter" : 2.25},
        { "sku" : "157661", "boxMeter" : 2.25},
        { "sku" : "157671", "boxMeter" : 2.25},
        { "sku" : "157681", "boxMeter" : 2.25},
        { "sku" : "157691", "boxMeter" : 2.25},
        { "sku" : "157701", "boxMeter" : 2.25},
        { "sku" : "157711", "boxMeter" : 2.25},
        { "sku" : "157721", "boxMeter" : 2.25},
        { "sku" : "157731", "boxMeter" : 2.25},
        { "sku" : "157741", "boxMeter" : 2.25},
        { "sku" : "157751", "boxMeter" : 2.25},
        { "sku" : "157761", "boxMeter" : 2.25},
        { "sku" : "157771", "boxMeter" : 2.25},
        { "sku" : "157781", "boxMeter" : 2.25},
        { "sku" : "157791", "boxMeter" : 2.25},
        { "sku" : "157801", "boxMeter" : 2.25},
        { "sku" : "157811", "boxMeter" : 2.25},
        { "sku" : "157821", "boxMeter" : 2.25},
        { "sku" : "157831", "boxMeter" : 2.25},
        { "sku" : "157841", "boxMeter" : 2.25},
        { "sku" : "157851", "boxMeter" : 2.19},
        { "sku" : "157861", "boxMeter" : 2.19},
        { "sku" : "157871", "boxMeter" : 2.19},
        { "sku" : "157881", "boxMeter" : 2.19},
        { "sku" : "157891", "boxMeter" : 2.19},
        { "sku" : "157901", "boxMeter" : 2.19},
        { "sku" : "157911", "boxMeter" : 2.19},
        { "sku" : "157921", "boxMeter" : 2.19},
        { "sku" : "157931", "boxMeter" : 2.19},
        { "sku" : "157941", "boxMeter" : 2.19},
        { "sku" : "157951", "boxMeter" : 2.19},
        { "sku" : "157961", "boxMeter" : 2.19},
        { "sku" : "157971", "boxMeter" : 2.19},
        { "sku" : "157981", "boxMeter" : 2.19},
        { "sku" : "157991", "boxMeter" : 2.19},
        { "sku" : "158001", "boxMeter" : 2.19},
        { "sku" : "158011", "boxMeter" : 2.02},
        { "sku" : "158021", "boxMeter" : 2.02},
        { "sku" : "158031", "boxMeter" : 2.02},
        { "sku" : "158041", "boxMeter" : 2.02},
        { "sku" : "158051", "boxMeter" : 2.02},
        { "sku" : "158061", "boxMeter" : 2.02},
        { "sku" : "158071", "boxMeter" : 2.02},
        { "sku" : "158081", "boxMeter" : 2.02},
        { "sku" : "158091", "boxMeter" : 2.02},
        { "sku" : "158101", "boxMeter" : 2.02},
        { "sku" : "158111", "boxMeter" : 2.02},
        { "sku" : "158121", "boxMeter" : 2.02},
        { "sku" : "158141", "boxMeter" : 2.02},
        { "sku" : "158151", "boxMeter" : 2.02},
        { "sku" : "158161", "boxMeter" : 2.02},
        { "sku" : "158171", "boxMeter" : 2.02},
        { "sku" : "158181", "boxMeter" : 2.07},
        { "sku" : "158191", "boxMeter" : 2.07},
        { "sku" : "158201", "boxMeter" : 2.07},
        { "sku" : "158211", "boxMeter" : 2.07},
        { "sku" : "158221", "boxMeter" : 2.07},
        { "sku" : "158231", "boxMeter" : 2.07},
        { "sku" : "158241", "boxMeter" : 2.07},
        { "sku" : "158251", "boxMeter" : 2.07},
        { "sku" : "158261", "boxMeter" : 2.07},
        { "sku" : "158271", "boxMeter" : 2.07},
        { "sku" : "158281", "boxMeter" : 2.07},
        { "sku" : "158291", "boxMeter" : 2.07},
        { "sku" : "158301", "boxMeter" : 2.07},
        { "sku" : "158311", "boxMeter" : 2.07},
        { "sku" : "158321", "boxMeter" : 2.07},
        { "sku" : "158331", "boxMeter" : 2.07},
        { "sku" : "158341", "boxMeter" : 2.07},
        { "sku" : "158351", "boxMeter" : 2.07},
        { "sku" : "158361", "boxMeter" : 2.07},
        { "sku" : "158371", "boxMeter" : 2.07},
        { "sku" : "158381", "boxMeter" : 2.07},
        { "sku" : "158391", "boxMeter" : 2.07},
        { "sku" : "158401", "boxMeter" : 2.07},
        { "sku" : "158411", "boxMeter" : 2.07},
        { "sku" : "158421", "boxMeter" : 2.07},
        { "sku" : "158431", "boxMeter" : 2.07},
        { "sku" : "158441", "boxMeter" : 2.07},
        { "sku" : "158451", "boxMeter" : 2.07},
        { "sku" : "158461", "boxMeter" : 2.07},
        { "sku" : "158471", "boxMeter" : 2.07},
        { "sku" : "158481", "boxMeter" : 2.07},
        { "sku" : "41212", "boxMeter" : 2.5},
        { "sku" : "41182", "boxMeter" : 2.4},
        { "sku" : "116561", "boxMeter" : 2.5},
        { "sku" : "158511", "boxMeter" : 1.93},
        { "sku" : "14707", "boxMeter" : 1.65},
        { "sku" : "14600", "boxMeter" : 2.58},
        { "sku" : "35901", "boxMeter" : 2.27},
        { "sku" : "85141", "boxMeter" : 2.28},
        { "sku" : "38432", "boxMeter" : 2.02},
        { "sku" : "14783", "boxMeter" : 1.46},
        { "sku" : "14785", "boxMeter" : 1.46},
        { "sku" : "14789", "boxMeter" : 1.46},
        { "sku" : "14801", "boxMeter" : 22.25},
        { "sku" : "14832", "boxMeter" : 2.07},
        { "sku" : "61451", "boxMeter" : 2.02},
        { "sku" : "85121", "boxMeter" : 2.93},
        { "sku" : "159211", "boxMeter" : 2.07},
        { "sku" : "159221", "boxMeter" : 2.07},
        { "sku" : "159231", "boxMeter" : 2.07},
        { "sku" : "159241", "boxMeter" : 2.07},
        { "sku" : "159251", "boxMeter" : 2.07},
        { "sku" : "159261", "boxMeter" : 2.07},
        { "sku" : "159271", "boxMeter" : 2.07},
        { "sku" : "159281", "boxMeter" : 2.07},
        { "sku" : "159291", "boxMeter" : 2.25},
        { "sku" : "159301", "boxMeter" : 2.2},
        { "sku" : "159311", "boxMeter" : 2.25},
        { "sku" : "159321", "boxMeter" : 2.2},
        { "sku" : "159331", "boxMeter" : 2.25},
        { "sku" : "159341", "boxMeter" : 2.25},
        { "sku" : "159351", "boxMeter" : 2.2},
        { "sku" : "159361", "boxMeter" : 2.2},
        { "sku" : "159371", "boxMeter" : 2.2},
        { "sku" : "159381", "boxMeter" : 2.2},
        { "sku" : "159401", "boxMeter" : 2.19},
        { "sku" : "159411", "boxMeter" : 2.19},
        { "sku" : "159421", "boxMeter" : 2.25},
        { "sku" : "159431", "boxMeter" : 2.25},
        { "sku" : "159441", "boxMeter" : 2.2},
        { "sku" : "159451", "boxMeter" : 2.2},
        { "sku" : "159461", "boxMeter" : 2.07},
        { "sku" : "159471", "boxMeter" : 2.07},
        { "sku" : "159481", "boxMeter" : 2.07},
        { "sku" : "159491", "boxMeter" : 2.07},
        { "sku" : "159501", "boxMeter" : 2.25},
        { "sku" : "159511", "boxMeter" : 2.2},
        { "sku" : "159521", "boxMeter" : 2.2},
        { "sku" : "159531", "boxMeter" : 2.2},
        { "sku" : "159541", "boxMeter" : 2.25},
        { "sku" : "159551", "boxMeter" : 2.02},
        { "sku" : "159561", "boxMeter" : 2.02},
        { "sku" : "159571", "boxMeter" : 2.02},
        { "sku" : "159581", "boxMeter" : 2.02},
        { "sku" : "159591", "boxMeter" : 2.07},
        { "sku" : "159601", "boxMeter" : 2.07},
        { "sku" : "159611", "boxMeter" : 2.25},
        { "sku" : "159621", "boxMeter" : 2.07},
        { "sku" : "159631", "boxMeter" : 2.07},
        { "sku" : "159641", "boxMeter" : 2.07},
        { "sku" : "159651", "boxMeter" : 2.25},
        { "sku" : "159661", "boxMeter" : 2.25},
        { "sku" : "159671", "boxMeter" : 2.2},
        { "sku" : "159681", "boxMeter" : 2.2},
        { "sku" : "159691", "boxMeter" : 2.25},
        { "sku" : "159701", "boxMeter" : 2.2},
        { "sku" : "159711", "boxMeter" : 2.25},
        { "sku" : "159721", "boxMeter" : 2.2},
        { "sku" : "159731", "boxMeter" : 2.19},
        { "sku" : "159741", "boxMeter" : 2.19},
        { "sku" : "159751", "boxMeter" : 2.19},
        { "sku" : "159761", "boxMeter" : 2.02},
        { "sku" : "159771", "boxMeter" : 2.02},
        { "sku" : "159781", "boxMeter" : 2.02},
        { "sku" : "159791", "boxMeter" : 2.07},
        { "sku" : "159801", "boxMeter" : 2.07},
        { "sku" : "159811", "boxMeter" : 2.25},
        { "sku" : "159821", "boxMeter" : 2.2},
        { "sku" : "159831", "boxMeter" : 2.25},
        { "sku" : "159841", "boxMeter" : 2.88},
        { "sku" : "159851", "boxMeter" : 2.88},
        { "sku" : "159861", "boxMeter" : 2.88},
        { "sku" : "159871", "boxMeter" : 2.88},
        { "sku" : "159881", "boxMeter" : 2.93},
        { "sku" : "159891", "boxMeter" : 2.93},
        { "sku" : "159901", "boxMeter" : 2.25},
        { "sku" : "159911", "boxMeter" : 2.2},
        { "sku" : "159921", "boxMeter" : 2.21},
        { "sku" : "159931", "boxMeter" : 2.2},
        { "sku" : "159941", "boxMeter" : 2.2},
        { "sku" : "159951", "boxMeter" : 2.02},
        { "sku" : "159961", "boxMeter" : 2.25},
        { "sku" : "159971", "boxMeter" : 2.2},
        { "sku" : "159981", "boxMeter" : 2.25},
        { "sku" : "159991", "boxMeter" : 2.2},
        { "sku" : "160001", "boxMeter" : 2.02},
        { "sku" : "160011", "boxMeter" : 2.02},
        { "sku" : "160021", "boxMeter" : 2.07},
        { "sku" : "160031", "boxMeter" : 2.07},
        { "sku" : "160041", "boxMeter" : 2.19},
        { "sku" : "160051", "boxMeter" : 2.19},
        { "sku" : "160061", "boxMeter" : 2.19},
        { "sku" : "160071", "boxMeter" : 2.21},
        { "sku" : "160081", "boxMeter" : 2.21},
        { "sku" : "160091", "boxMeter" : 2.02},
        { "sku" : "160101", "boxMeter" : 2.07},
        { "sku" : "160111", "boxMeter" : 2.07},
        { "sku" : "160121", "boxMeter" : 2.88},
        { "sku" : "160131", "boxMeter" : 2.93},
        { "sku" : "160141", "boxMeter" : 2.93},
        { "sku" : "160151", "boxMeter" : 2.93},
        { "sku" : "42222", "boxMeter" : 1.73},
        { "sku" : "42232", "boxMeter" : 1.73},
        { "sku" : "42242", "boxMeter" : 1.73},
        { "sku" : "42252", "boxMeter" : 1.73},
        { "sku" : "42262", "boxMeter" : 1.73},
        { "sku" : "42272", "boxMeter" : 1.73},
        { "sku" : "42282", "boxMeter" : 1.73},
        { "sku" : "42292", "boxMeter" : 1.73},
        { "sku" : "42302", "boxMeter" : 1.73},
        { "sku" : "42312", "boxMeter" : 1.73},
        { "sku" : "42322", "boxMeter" : 1.73},
        { "sku" : "42332", "boxMeter" : 1.73},
        { "sku" : "42342", "boxMeter" : 1.73},
        { "sku" : "42352", "boxMeter" : 1.73},
        { "sku" : "42362", "boxMeter" : 1.73},
        { "sku" : "42372", "boxMeter" : 1.73},
        { "sku" : "42382", "boxMeter" : 1.73},
        { "sku" : "42392", "boxMeter" : 1.73},
        { "sku" : "42402", "boxMeter" : 1.73},
        { "sku" : "42412", "boxMeter" : 1.73},
        { "sku" : "42422", "boxMeter" : 1.73},
        { "sku" : "42432", "boxMeter" : 1.73},
        { "sku" : "42442", "boxMeter" : 1.73},
        { "sku" : "42452", "boxMeter" : 1.73},
        { "sku" : "42632", "boxMeter" : 1.73},
        { "sku" : "14650", "boxMeter" : 2.35},
        { "sku" : "35911", "boxMeter" : 2.27},
        { "sku" : "50761", "boxMeter" : 2.33},
        { "sku" : "59401", "boxMeter" : 2.27},
        { "sku" : "60271", "boxMeter" : 2.32},
        { "sku" : "73261", "boxMeter" : 2.28},
        { "sku" : "124571", "boxMeter" : 2.22},
        { "sku" : "124581", "boxMeter" : 2.28},
        { "sku" : "134791", "boxMeter" : 2.02},
        { "sku" : "174231", "boxMeter" : 2.27},
        { "sku" : "174241", "boxMeter" : 2.19},
        { "sku" : "131931", "boxMeter" : 2.73},
        { "sku" : "134221", "boxMeter" : 2.34},
        { "sku" : "134801", "boxMeter" : 2.73},
        { "sku" : "136511", "boxMeter" : 2.62},
        { "sku" : "136531", "boxMeter" : 1.47},
        { "sku" : "138191", "boxMeter" : 2.73},
        { "sku" : "138271", "boxMeter" : 1.52},
        { "sku" : "145551", "boxMeter" : 2.73},
        { "sku" : "147281", "boxMeter" : 2.81},
        { "sku" : "147291", "boxMeter" : 2.81},
        { "sku" : "147301", "boxMeter" : 2.87},
        { "sku" : "147311", "boxMeter" : 2.87},
        { "sku" : "148481", "boxMeter" : 2.28},
        { "sku" : "148521", "boxMeter" : 2.73},
        { "sku" : "159151", "boxMeter" : 2.52},
        { "sku" : "161411", "boxMeter" : 2.87},
        { "sku" : "162621", "boxMeter" : 2.65},
        { "sku" : "162641", "boxMeter" : 2.65},
        { "sku" : "164551", "boxMeter" : 2.73},
        { "sku" : "164591", "boxMeter" : 2.52},
        { "sku" : "164611", "boxMeter" : 2.65},
        { "sku" : "167951", "boxMeter" : 2.87},
        { "sku" : "167961", "boxMeter" : 2.87},
        { "sku" : "167971", "boxMeter" : 2.87},
        { "sku" : "167981", "boxMeter" : 2.81},
        { "sku" : "167991", "boxMeter" : 2.81},
        { "sku" : "168001", "boxMeter" : 2.52},
        { "sku" : "168011", "boxMeter" : 2.52},
        { "sku" : "168051", "boxMeter" : 2.43},
        { "sku" : "168421", "boxMeter" : 1.8},
        { "sku" : "168451", "boxMeter" : 2.3},
        { "sku" : "168461", "boxMeter" : 2.3},
        { "sku" : "168471", "boxMeter" : 2.16},
        { "sku" : "168491", "boxMeter" : 2.16},
        { "sku" : "168501", "boxMeter" : 2.21},
        { "sku" : "170361", "boxMeter" : 2.52},
        { "sku" : "170371", "boxMeter" : 2.73},
    ];

    const getdiscountPercentage = (totalPrice, discountPrice) => {
        const discountPercentage = ((totalPrice - discountPrice) * 100) / totalPrice;
        return discountPercentage;
    }
    
    const getPriceMeter = (boxPrice, boxMeter) => {
        return boxPrice / boxMeter;
    };
    
    const getdiscountPrice = (price, discountPercentage) => {
        return price - ((discountPercentage / 100) * price);
    }
    
    const tranformInNumber = (value) => {
         let newValue = value.replace(/\s/g, '');
         newValue = newValue.replace("R$", "");
         newValue = newValue.replace(",", ".");
         newValue = Number(newValue);
         return newValue;
    };
    
    const tranformInString = (value) => {
         let newValue = value.toFixed(2);
         newValue = newValue.replace(".", ",");
         return newValue;
    };

    // var skuFilter = [];
    // Array.from(document.querySelectorAll('.produto-sku')).forEach((item) => {
    //     listFloorsSKU.forEach((skuItem) => {
    //         if(skuItem.sku == item.innerText) {
    //             skuFilter.push(item.nextElementSibling.getAttribute('data-trustvox-product-code'));
    //         } 
    //     });
    // });

    // var btnComprar = Array.from(document.querySelectorAll('a.botao-comprar'));

    // var btnComprarArray = [];

    // btnComprar = btnComprar.forEach((btn) => {
    //     skuFilter.forEach((item) => {
    //         if(btn.pathname.includes(item)) {
    //             btnComprarArray.push(btn);
    //         }
    //     });
    // });

    // const modalFloor = document.querySelector(".modal-floor");

    // btnComprarArray.forEach((item) => {
    //     item.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         modalFloor.classList.add("show");
    //     });
    // });
    
    const modifyPriceShowCase = (products) => {
        products.forEach((product, index) => {
            const item = listFloorsSKU.find((item) => item.sku == product.querySelector(".produto-sku").innerText);
            if(!!item && !product.classList.contains("modified")){
                product.classList.add("modified")
                const totalPrice = product.querySelector(".preco-promocional-wrap strong");
                const discountPrice = product.querySelector(".preco-avista-valor strong");
                const priceMeter = getPriceMeter(tranformInNumber(totalPrice.innerText), item.boxMeter);
                const discountPercentage = getdiscountPercentage(tranformInNumber(totalPrice.innerText), tranformInNumber(discountPrice.innerText));
                
                discountPrice.innerText = `R$ ${tranformInString(getdiscountPrice(priceMeter, discountPercentage))} mÂ²`;
                totalPrice.innerText = `R$ ${tranformInString(priceMeter)} mÂ²`;
            }
        });
    }
    
    const modifyPricePageProduct = (product, item) => {
        // document.querySelector(".preco-parcela-wrap").style.display = "none";
        // document.querySelector(".qtde-adicionar-carrinho").style.display = "none";
        document.querySelector(".produto-detalhes .botao-comprar").style.display = "none";
        product.querySelector(".avista").innerText = `/ caixa - cada caixa possui ${item.boxMeter}mÂ²`;
        product.querySelector(".preco-promocional").style.display = "none";
        const newButtonBuy = document.querySelector(".produto-detalhes .comprar");
        const button = document.createElement("button");
        button.innerHTML = `<i class="icon-shopping-cart"></i> Comprar`;
        button.classList.add("button-modal-buy");
        newButtonBuy.appendChild(button);
        const modalFloor = document.querySelector(".modal-floor");
        const btnBuyModal = modalFloor.querySelector(".modal-floor__button--buy");
        const productID = productInfos.querySelector(`.SKU-${item.sku}`).getAttribute("data-produto-id");
        const btnOpenModal = product.querySelector(".button-modal-buy");
        const btnCloseModal = document.querySelector(".modal-floor__close");
        const priceBox = product.querySelector(".preco-promocional");
        const priceDiscountBox = product.querySelector(".preco-avista-valor strong");
        const priceMeter = getPriceMeter(tranformInNumber(priceBox.innerText), item.boxMeter);
        const discountPercentage = getdiscountPercentage(tranformInNumber(priceBox.innerText), tranformInNumber(priceDiscountBox.innerText));
        const inputModal = modalFloor.querySelector("#modal-floor__input");
        const totalModal = modalFloor.querySelector("#total-price");
        const totalAPrazoModal = modalFloor.querySelector("#total-a-prazo");
        document.querySelectorAll(".modal-floor .box-meter").forEach((spanBoxMeter) => spanBoxMeter.innerText = `${item.boxMeter}mÂ²`);
        document.querySelectorAll(".modal-floor .box-price").forEach((spanBoxPrice) => spanBoxPrice.innerText = `R$ ${tranformInString(getdiscountPrice(priceMeter, discountPercentage))}`);
        inputModal.value = `${tranformInString(item.boxMeter)}`;
        totalModal.innerText = priceDiscountBox.innerText;
        totalAPrazoModal.innerText = `R$ ${tranformInNumber(priceBox.innerText).toFixed(2)}`;
        product.querySelector(".preco-economiza").innerText = `R$ ${tranformInString(getdiscountPrice(priceMeter, discountPercentage))} mÂ² no pix`;
        product.querySelector(".preco-economiza").style.fontSize  = "18px";
        product.querySelector(".preco-economiza").style.fontWeight  = 800;
        btnOpenModal.addEventListener("click", () => {
            modalFloor.classList.add("show");
        });

        const btnOpenModalFlutuante = document.querySelector(".resumo-flutuante .botao-comprar");

        btnOpenModalFlutuante.addEventListener("click", (e) => {
            e.preventDefault();
            modalFloor.classList.add("show");
        });
        
        document.querySelector('.resumo-flutuante .preco-avista-valor span').innerText = 'no pix / caixa';

        console.log(getdiscountPrice(priceMeter, discountPercentage));
        
        btnCloseModal.addEventListener("click", () => {
            modalFloor.classList.remove("show");
        });

        $('.preco-aux').hide();
        
        const plus = modalFloor.querySelector(".modal-floor--plus");
        const minus = modalFloor.querySelector(".modal-floor--minus");
        const inputFloor = document.querySelector("#modal-floor__input");
        let quantity = 1;
        
        const updateTotalPrice = (currentQuantity) => {
            const currentPrice = tranformInNumber(priceBox.innerText) * currentQuantity;
            const currentPriceDiscount = currentPrice - ((discountPercentage / 100) * currentPrice);
            totalModal.innerText = `R$ ${tranformInString(currentPriceDiscount)}`;
            totalAPrazoModal.innerText = `R$ ${tranformInString(currentPrice)}`;
            document.querySelector(".modal-floor .quantity").innerText = currentQuantity;
            btnBuyModal.setAttribute("href", `https://www.guemat.com.br/carrinho/produto/${productID}/adicionar/${quantity}`);
        }

        inputFloor.addEventListener('blur', (e) => {
            const value = e.target.value;
            const count = Math.round(value / item.boxMeter);
            var totalMeters = count * item.boxMeter;
            quantity = count

            updateTotalPrice(quantity);
            inputFloor.value = `${tranformInString(totalMeters)}`;
        });

        inputFloor.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                const value = e.target.value;
                const count = Math.round(value / item.boxMeter);
                var totalMeters = count * item.boxMeter;
                quantity = count
    
                updateTotalPrice(quantity);
                inputFloor.value = `${tranformInString(totalMeters)}`;
            }
        });
        
        plus.addEventListener("click", () => {
            quantity += 1;
            totalMeter = tranformInNumber(inputModal.value) + item.boxMeter;
            inputModal.value = `${tranformInString(totalMeter)}`;
            updateTotalPrice(quantity);
        });
        
        minus.addEventListener("click", () => {
            if(quantity != 1){
                quantity -= 1;
                totalMeter = tranformInNumber(inputModal.value) - item.boxMeter;
                inputModal.value = `${tranformInString(totalMeter)}`;
                updateTotalPrice(quantity);
            }else{
                quantity;
                updateTotalPrice(quantity);
            }
        });
    }

    setTimeout(() => {
        const body = document.querySelector('body');
        if(body.classList.contains('pagina-produto')) {
            const sku = document.querySelector('[itemprop="sku"]').innerText;
            var find = listFloorsSKU.find((item) => item.sku == sku);
    
            if(find) {
                $.fn.reverseChildren = function() {
                    return this.each(function(){
                      var $this = $(this);
                      $this.children().each(function(){ $this.prepend(this) });
                    });
                };
                $('.preco-avista-valores').reverseChildren();
                $('<link rel="stylesheet" href="https://cdn.awsli.com.br/1709/1709002/arquivos/floors-css-9.css" type="text/css" />').appendTo('head');
                document.querySelector('.qtde-adicionar-carrinho').innerHTML = `
                    <div id="calculadora" style="font-weight: bold; text-align: center; width: 250px; color: #fff; border-radius: 8px; padding: 15px 16px; background: var(--cPrecoAvista);">
                        <img src="https://cdn.awsli.com.br/1709/1709002/arquivos/calculator.png" />
                        Calculadora
                    </div>
                `;
                
                const modalFloor = document.querySelector(".modal-floor");
                const btnOpenModal2 = document.querySelector("#calculadora");
                btnOpenModal2.addEventListener("click", () => {
                    modalFloor.classList.add("show");
                });
            }
    
            const item = listFloorsSKU.find((item) => item.sku == sku);
    
            const modalFloor = document.querySelector(".modal-floor");
            const productID = productInfos.querySelector(`.SKU-${item.sku}`).getAttribute("data-produto-id");
            const btnBuyModal = modalFloor.querySelector(".modal-floor__button--buy");
            btnBuyModal.setAttribute("href", `https://www.guemat.com.br/carrinho/produto/${productID}/adicionar/1`);
        }
    }, 2000);
    
    let productInfos = '';
    let checkSearchList = '';
    let listagemProducts = '';
    
     const listProductsInterval = setInterval(() => {
        if(!!listagemProducts){
            const products = listagemProducts.querySelectorAll(".listagem-item");
             modifyPriceShowCase(products);
        }else{
            listagemProducts = document.querySelector("#listagemProdutos");
        }
    }, 1000);
    
    const checkSearchListInterval = setInterval(() => {
        if(!!checkSearchList){
            const products = checkSearchList.querySelectorAll(".apoio-sh");
            modifyPriceShowCase(products);
        }else{
            checkSearchList = document.querySelector("#smarthint-search-result");
        }
    }, 1000);
    
    const checkPageProductInterval = setInterval(() => {
        if(!!productInfos){
            const sku = productInfos.querySelector("[itemprop='sku']").innerText;
            const item = listFloorsSKU.find((item) => item.sku == sku);
            if(!!item){
                modifyPricePageProduct(productInfos, item);
            }
            clearInterval(checkPageProductInterval);
        }else{
            productInfos = document.querySelector(".produto-detalhes");
        }
    }, 1000);
    
    let pressButton = true;
    setInterval(() =>{
        const btnSearchMore = document.querySelector("#smarthint-search-getmore");
        if(!!btnSearchMore && pressButton){
            pressButton = false;
            btnSearchMore.addEventListener("click", () => {
                const currentList = checkSearch.querySelectorAll(".apoio-sh .listagem-item");
                let newList = currentList;
                const att = setInterval(() => {
                    if(currentList.length === newList.length){
                        newList = checkSearch.querySelectorAll(".apoio-sh .listagem-item")
                    }else{
                        modifyPriceShowCase(newList);
                        clearInterval(att);
                    }
                }, 1000);
                pressButton = true;
            });
        }    
    },1000);
}, false);