var tamingController=angular.module('tamingControllers', []).controller('tamingController', ['$scope', '$rootScope', '$interval', '$cookies', '$animate', function($scope, $rootScope, $interval, $cookies, $animate) {

	$scope.foods={

		'Mejoberry': {
			food: 30,
			affinity: 30
		},
		'Other Berry': {
			food: 20,
			affinity: 20
		},
		'Raw Meat': {
			food: 50,
			affinity: 50
		},
		'Raw Meat-Dung Beetle': {
			food: 15,
			affinity: 15
		},
		'Cooked Meat': {
			food: 25,
			affinity: 25
		},
		'Meat Jerky': {
			food: 25,
			affinity: 25
		},
		'Prime Meat': {
			food: 50,
			affinity: 150
		},
		'Prime Meat-Compy': {
			food: 20,
			affinity: 600
		},
		'Cooked Prime Meat': {
			food: 50,
			affinity: 75
		},
		'Prime Meat Jerky': {
			food: 50,
			affinity: 75
		},
		'C/J Prime': {
			food: 50,
			affinity: 75
		},
		'Spoiled Meat': {
			food: 50,
			affinity: 100
		},
		'Raw Fish': {
			food: 25,
			affinity: 20
		},
		'Cooked Fish': {
			food: 25,
			affinity: 10
		},
		'Prime Fish': {
			food: 25,
			affinity: 60
		},
		'Cooked Prime Fish': {
			food: 25,
			affinity: 30
		},
		'Kibble-Generic': {
			food: 79.98,
			affinity: 400
		},
		'Kibble-Bronto': {
			food: 53.28,
			affinity: 400
		},
		'Kibble-Gigantopithecus': {
			food: 79.98,
			affinity: 300
		},
		'Kibble-Mosasaurus': {
			food: 79.98,
			affinity: 550
		},
		'Kibble-Diplodocus': {
			food: 53.28,
			affinity: 275
		},
		'Crop': {
			food: 40,
			affinity: 40
		},
		'Rare Mushroom': {
			food: 75,
			affinity: 90
		},
		'Plant Species X Seed': {
			food: 50,
			affinity: 45
		},
		'Giga Egg': {
			food: 300,
			affinity: 1200
		},
		'Quetz Egg': {
			food: 200,
			affinity: 550
		},
		'Rex Egg': {
			food: 200,
			affinity: 100
		},
		'Spino Egg': {
			food: 137.5,
			affinity: 80
		},
		'Bronto Egg': {
			food: 250,
			affinity: 60
		},
		'Carno Egg': {
			food: 137.5,
			affinity: 30
		},
		'Dodo Egg': {
			food: 20,
			affinity: 9
		},
		'Human Feces': {
			food: 10,
			affinity: 60
		},
		'Large Feces': {
			food: 37.5,
			affinity: 225
		},
		'Medium Feces': {
			food: 25,
			affinity: 150
		},
		'Small Feces': {
			food: 12.5,
			affinity: 75
		},
		'Angler Gel': {
			food: 8*3,
			affinity: 50.0
		},
		'Broth of Enlightenment': {
			food: 80,
			affinity: 1500.0
		},
		'Rare Flower': {
			food: 15*2.3333,
			affinity: 200
		}

	}

	$scope.komethods={

		/*'Bow': 20*2+20*2.5,
		'Crossbow': 35*2+35*2.5,
		'Longneck': 26*6+26*2.5*/

		'Slingshot': {
			damagetypes: [
				"DmgType_ProjectileWithImpactFX_DoubleTorp",
				"DmgType_ProjectileWithImpactFX",
				"DmgType_Projectile"
			],
			damage: 14,
			torpor: 14*1.75,
			usesmeleedam: false,
			usesweapondam: true,
			time: 0
		},
		'Bow': {
			damagetypes: [
				"DmgType_ProjectileWithImpactFX_Tranq",
				"DmgType_ProjectileWithImpactFX",
				"DmgType_Projectile"
			],
			damage: 20,
			torpor: 20*2+20*2.5,
			usesmeleedam: false,
			usesweapondam: true,
			time: 5
		},

		'Crossbow': {
			damagetypes: [
				"DmgType_ProjectileWithImpactFX_Tranq",
				"DmgType_ProjectileWithImpactFX",
				"DmgType_Projectile"
			],
			damage: 35,
			torpor: 35*2+35*2.5,
			usesmeleedam: false,
			usesweapondam: true,
			time: 5
		},

		'Longneck': {
			damagetypes: [
				"DmgType_ProjectileWithImpactFX_TranqMore",
				"DmgType_ProjectileWithImpactFX",
				"DmgType_Projectile"
			],
			damage: 26,
			torpor: 26*6+26*2.5,
			usesmeleedam: false,
			usesweapondam: true,
			time: 5
		},
		'Fists': {
			damagetypes: [
				"DmgType_Melee_Torpidity_SelfHurt",
				"DmgType_Melee_Torpidity_StoneWeapon",
				"DmgType_Melee_Torpidity",
				"DmgType_Melee_Human",
				"DmgType_Melee"
			],
			damage: 8,
			torpor: 8*1.75,
			usesmeleedam: true,
			usesweapondam: false,
			time: 0
		},
		'Club': {
			damagetypes: [
				"DmgType_Melee_HighTorpidity_StoneWeapon_Club",
				"DmgType_Melee_HighTorpidity_StoneWeapon",
				"DmgType_Melee_Torpidity_StoneWeapon",
				"DmgType_Melee_Torpidity",
				"DmgType_Melee_Human",
				"DmgType_Melee"
			],
			damage: 5,
			torpor: 5*3.75,
			usesmeleedam: true,
			usesweapondam: true,
			time: 0
		},
		'Electric Prod': {
			damagetypes: [
				"DmgType_Melee_Human_ElectricStun",
				"DmgType_Melee_Human",
				"DmgType_Melee"
			],
			damage: 1,
			torpor: 1*500,
			usesmeleedam: false,
			usesweapondam: true,
			time: 0
		},
		'Scorpion': {
			damagetypes: [
				"DmgType_Melee_TorpPoison",
				"DmgType_Melee_Dino_Carnivore_Small",
				"DmgType_Melee_Dino_Carnivore",
				"DmgType_Melee_Dino",
				"DmgType_Melee"
			],
			damage: 15,
			torpor: 15*3,
			usesmeleedam: true,
			usesweapondam: false,
			time: 10
		},
		'Beelzebufo (Main)': {
			damagetypes: [
				"DmgType_Melee_TorpPoison_ChitinPaste",
				"DmgType_Melee_TorpPoison",
				"DmgType_Melee_Dino_Carnivore_Small",
				"DmgType_Melee_Dino_Carnivore",
				"DmgType_Melee_Dino",
				"DmgType_Melee"
			],
			damage: 12,
			torpor: 12*3,
			usesmeleedam: true,
			usesweapondam: false,
			time: 10
		},
		'Beelzebufo (Secondary)': {
			damagetypes: [
				"DmgType_Melee_TorpPoison_ChitinPaste",
				"DmgType_Melee_TorpPoison",
				"DmgType_Melee_Dino_Carnivore_Small",
				"DmgType_Melee_Dino_Carnivore",
				"DmgType_Melee_Dino",
				"DmgType_Melee"
			],
			damage: 20,
			torpor: 20*3,
			usesmeleedam: true,
			usesweapondam: false,
			time: 10
		},
		'Pachy (Normal)': {
			damagetypes: [
				"DmgType_Melee_Dino_Herbivore_Small_LargeTorp",
				"DmgType_Melee_Dino_Herbivore_Small",
				"DmgType_Melee_Dino_Herbivore",
				"DmgType_Melee_Dino",
				"DmgType_Melee"
			],
			damage: 10,
			torpor: 10*1,
			usesmeleedam: true,
			usesweapondam: false,
			time: 0
		},
		'Pachy (Charge)': {
			damagetypes: [
				"DmgType_Melee_Dino_Herbivore_Small_HugeTorp",
				"DmgType_Melee_Dino_Herbivore_Small",
				"DmgType_Melee_Dino_Herbivore",
				"DmgType_Melee_Dino",
				"DmgType_Melee"
			],
			damage: 17,
			torpor: 17*3.5,
			usesmeleedam: true,
			usesweapondam: false,
			time: 0
		}

	};

	$scope.narcoticsmethods={
		"Narcotics": {
			torpor: 40,
			time: 8,
			rate: 5
		},
		"Narcoberries": {
			torpor: 7.5,
			time: 3,
			rate: 2.5
		}
	}

	$scope.creatures={

		Allosaurus: {
			foodrate: -0.001852*180.063385,
			basetorpor: 1000.0,
			basetorporrate: -0.1*8.0,
			torporperlevel: 0.06,
			baseaffinity: 2400.0,
			affinityperlevel: 100,
			ineffectbyaff: 1.875,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Diplo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Anglerfish: {
			foodrate: -0.001852*149.988007,
			basetorpor: 900,
			basetorporrate: -7.0*0.4,
			torporperlevel: 0.06,
			baseaffinity: 1800.0,
			affinityperlevel: 90,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Kairuku',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},		

		Ankylosaurus: {
			foodrate: -0.003156*176.03154,
			basetorpor: 420,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 3000,
			affinityperlevel: 150,
			ineffectbyaff: 0.2,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Dilo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Araneo: {
			foodrate: -0.001736*864.055298,
			baseaffinity: 4000,
			affinityperlevel: 120,
			ineffectbyaff: 4.166667,
			basefood: 'Spoiled Meat',
			foods: ['Spoiled Meat'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.0,
			nonviolentfoodaffinitymultiplier: 1.0
		},

		Argentavis: {
			foodrate: -0.001852*199.983994,
			basetorpor: 600,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 2000,
			affinityperlevel: 100,
			ineffectbyaff: 1.875,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Stego',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Projectile": 1.5,
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Arthropluera: {
			foodrate: -0.001543*648.088135,
			baseaffinity: 3000.0,
			affinityperlevel: 75.0,
			ineffectbyaff: 2.5,
			basefood: 'Spoiled Meat',
			foods: ['Raw Meat', 'Spoiled Meat', 'Broth of Enlightenment'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.0,
			nonviolentfoodaffinitymultiplier: 1.6
		},

		Beelzebufo: {
			foodrate: -0.001929*648.00415,
			basetorpor: 200,
			basetorporrate: -0.1*6.666,
			torporperlevel: 0.06,
			baseaffinity: 1800.000,
			affinityperlevel: 75,
			ineffectbyaff: 0.4,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Scorp',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Brontosaurus: {
			foodrate: -0.007716*180.001144,
			basetorpor: 1900,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 10000,
			affinityperlevel: 500,
			ineffectbyaff: 0.06,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Bronto'],
			kibble: 'Turtle',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Carbonemys: {
			foodrate: -0.003156*352.06308,
			basetorpor: 275,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 3000,
			affinityperlevel: 150,
			ineffectbyaff: 0.2,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Ptera',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Shell": 0.2,
				"Tail": 0.5
			}
		},

		Carnotaurus: {
			foodrate: -0.001852*199.983944,
			basetorpor: 350,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 2000,
			affinityperlevel: 100,
			ineffectbyaff: 1.875,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Ankylo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Castoroides: {
			foodrate: -0.002314*160.056335,
			basetorpor: 350,
			basetorporrate: -0.1*15.0,
			torporperlevel: 0.06,
			baseaffinity: 2000,
			affinityperlevel: 100,
			ineffectbyaff: 0.3,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Galli',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Compsognathus: {
			foodrate: -0.000868*1728.110596,
			basetorpor: 25,
			basetorporrate: -0.1*13.0,
			torporperlevel: 0.06,
			baseaffinity: 500.0,
			affinityperlevel: 65.0,
			ineffectbyaff: 8.333333,
			basefood: 'Prime Meat-Compy',
			foods: ['Prime Meat-Compy'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Dilophosaurus: {
			foodrate: -0.000868*1728.110596,
			basetorpor: 75,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 450,
			affinityperlevel: 22.5,
			ineffectbyaff: 8.333333,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Dimetrodon: {
			foodrate: -0.001736*160.010239,
			basetorpor: 750.0,
			basetorporrate: -10.0*2.5,
			torporperlevel: 0.06,
			baseaffinity: 1500.0,
			affinityperlevel: 90.0,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Quetzal',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Dimorphodon: {
			foodrate: -0.001302*1152.07373,
			basetorpor: 100,
			basetorporrate: -0.1*8.333,
			torporperlevel: 0.06,
			baseaffinity: 900,
			affinityperlevel: 45,
			ineffectbyaff: 4.166666,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Diplodocus: {
			foodrate: -0.007716*180.001144,
			basetorpor: 3000.0,
			basetorporrate: -1*0.75,
			torporperlevel: 0.06,
			baseaffinity: 7500.0,
			affinityperlevel: 375.0,
			ineffectbyaff: 0.08,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Diplodocus'],
			kibble: 'Lystrosaurus',
			tamingmethods: ['Standard', 'Non-Violent'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			},
			nonviolentfoodratemultiplier: 0.5, //2 in devkit
			nonviolentfoodaffinitymultiplier: 3.0
		},

		"Direbear": {
			foodrate: -0.003156*150.0,
			basetorpor: 1000,
			basetorporrate: -0.1*9.0,
			torporperlevel: 0.06,
			baseaffinity: 4000,
			affinityperlevel: 125,
			ineffectbyaff: 1.25,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Mejoberry', 'Other Berry', 'Kibble-Generic'],
			kibble: 'Carno',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		"Direwolf": {
			foodrate: -0.444444462455,
			basetorpor: 450,
			basetorporrate: -0.1*5.0,
			torporperlevel: 0.06,
			baseaffinity: 1200,
			affinityperlevel: 60,
			ineffectbyaff: 3.125,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Carno',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 2.5
			}
		},

		Dodo: {
			foodrate: -0.000868*2880.184326,
			basetorpor: 30,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 450,
			affinityperlevel: 22.5,
			ineffectbyaff: 1.333333,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Doedicurus: {
			foodrate: -0.003156*176.03154,
			basetorpor: 800,
			basetorporrate: -0.1*7.5,
			torporperlevel: 0.06,
			baseaffinity: 4000,
			affinityperlevel: 150,
			ineffectbyaff: 0.2,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Dilo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		"Dung Beetle": {
			foodrate: -0.001488*336.021515,
			baseaffinity: 900.0,
			affinityperlevel: 50.0,
			ineffectbyaff: 4.166667,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Spoiled Meat', 'Human Feces', 'Small Feces', 'Medium Feces', 'Large Feces'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2,
			nonviolentfoodaffinitymultiplier: 1.0
		},

		Dunkleosteus: {
			foodrate: -0.001852*199.983994,
			basetorpor: 1150.0,
			basetorporrate: -2.0*0.5,
			torporperlevel: 0.06,
			baseaffinity: 1300.0,
			affinityperlevel: 60.0,
			ineffectbyaff: 3.275,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Titanoboa',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DamageType": 0.275,
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Gallimimus: {
			foodrate: -0.001929*432.002777,
			basetorpor: 420.0,
			basetorporrate: -1.67*2.5,
			torporperlevel: 0.06,
			baseaffinity: 2200.0,
			affinityperlevel: 95.0,
			ineffectbyaff: 0.4,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Dimetro',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 2
			}
		},

		Giganotosaurus: {
			foodrate: -0.002314*160.056335,
			basetorpor: 10000,
			basetorporrate: -25.0*4.8,
			torporperlevel: 0.06,
			baseaffinity: 5000,
			affinityperlevel: 160,
			ineffectbyaff: 1.25,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Quetzal',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Gigantopithecus: {
			foodrate: -0.004156*176.03154,
			baseaffinity: 4600.0,
			affinityperlevel: 75,
			ineffectbyaff: 2.5,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Kibble-Gigantopithecus'],
			kibble: 'Titanoboa',
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 0.5, //2 in devkit
			nonviolentfoodaffinitymultiplier: 1.65
		},

		Ichthyosaurus: {
			foodrate: -0.001929*420.0,
			baseaffinity: 1500,
			affinityperlevel: 75,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Dodo',
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.5,
			nonviolentfoodaffinitymultiplier: 1.6
		},

		Kairuku: {
			foodrate: -0.001389*1079.913574,
			basetorpor: 300,
			basetorporrate: -0.1*10.0,
			torporperlevel: 0.06,
			baseaffinity: 900,
			affinityperlevel: 45,
			ineffectbyaff: 4.166667,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Lystrosaurus: {
			foodrate: -0.000868*2880.184326,
			baseaffinity: 2000.0,
			affinityperlevel: 22.5,
			ineffectbyaff: 1.333333,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Rare Flower'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.0,
			nonviolentfoodaffinitymultiplier: 1.6
		},

		Mammoth: {
			foodrate: -0.004133*192.027771,
			basetorpor: 550,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 5000,
			affinityperlevel: 250,
			ineffectbyaff: 0.12,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Raptor',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Manta: {
			foodrate: -0.001929*420.0,
			baseaffinity: 1500.0,
			affinityperlevel: 75.0,
			ineffectbyaff: 2.5,
			basefood: 'Angler Gel',
			foods: ['Angler Gel'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.5,
			nonviolentfoodaffinitymultiplier: 1.6
		},

		Megaloceros: {
			foodrate: -0.001543*432.058746,
			basetorpor: 175,
			basetorporrate: -0.1*2.915,
			torporperlevel: 0.06,
			baseaffinity: 1200,
			affinityperlevel: 60,
			ineffectbyaff: 0.5,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Dimorph',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1.0000,
				"Head": 2.5
			}
		},

		Megalodon: {
			foodrate: -0.001852*199.983994,
			basetorpor: 800,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 2000,
			affinityperlevel: 100,
			ineffectbyaff: 1.875,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Spino',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Mesopithicus: {
			foodrate: -0.000868*2880.184326,
			baseaffinity: 2200,
			affinityperlevel: 65,
			ineffectbyaff: 2.5,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Kibble-Generic'],
			kibble: 'Dodo',
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2,
			nonviolentfoodaffinitymultiplier: 1.65
		},

		Mosasaurus: {
			foodrate: -0.005*180.001144,
			basetorpor: 3000,
			basetorporrate: -0.4*32.0,
			torporperlevel: 0.06,
			baseaffinity: 11000,
			affinityperlevel: 600,
			ineffectbyaff: 0.06,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Mosasaurus'],
			kibble: 'Quetzal',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Onyc: {
			foodrate: -0.002893*192.034409,
			baseaffinity: 3000,
			affinityperlevel: 90,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime'],
			tamingmethods: ['Non-Violent'],
			nonviolentfoodratemultiplier: 2.0,
			nonviolentfoodaffinitymultiplier: 1.0
		},

		Oviraptor: {
			foodrate: -0.001302*768.049133,
			basetorpor: 125.0,
			basetorporrate: -0.1*2.08,
			torporperlevel: 0.06,
			baseaffinity: 960.0,
			affinityperlevel: 42.0,
			ineffectbyaff: 16.666668,
			basefood: 'Dodo Egg',
			foods: ['Dodo Egg', 'Giga Egg', 'Quetz Egg', 'Rex Egg', 'Spino Egg', 'Bronto Egg', 'Carno Egg'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Pachycephalosaurus: {
			foodrate: -0.001543*648.088135,
			basetorpor: 160.0,
			basetorporrate: -0.1*2.666,
			torporperlevel: 0.06,
			baseaffinity: 1200.0,
			affinityperlevel: 60.0,
			ineffectbyaff: 0.5,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Dilo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 0.125
			}
		},

		Paraceratherium: {
			foodrate: -0.0035*327.6474,
			basetorpor: 1300.0,
			basetorporrate: -0.1*9.025,
			torporperlevel: 0.06,
			baseaffinity: 6500.0,
			affinityperlevel: 325.0,
			ineffectbyaff: 0.0923,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Pachy',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Parasaurolophus: {
			foodrate: -0.001929*864.005554,
			basetorpor: 150,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1500,
			affinityperlevel: 75,
			ineffectbyaff: 0.4,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 2
			}
		},

		Pelagornis: {
			foodrate: -0.001543*216.029373,
			basetorpor: 120.0,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1200.0,
			affinityperlevel: 60.0,
			ineffectbyaff: 3.125,
			basefood: 'Raw Fish',
			foods: ['Raw Fish', 'Prime Fish', 'Kibble-Generic'],
			kibble: 'Compy',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Phiomia: {
			foodrate: -0.003156*1584.283936,
			basetorpor: 240,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 3000,
			affinityperlevel: 150,
			ineffectbyaff: 0.2,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Plesiosaurus: {
			foodrate: -0.003858*180.001144,
			basetorpor: 1600,
			basetorporrate: -0.1*21.333332,
			torporperlevel: 0.06,
			baseaffinity: 5000,
			affinityperlevel: 250,
			ineffectbyaff: 0.75,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Rex',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Procoptodon: {
			foodrate: -0.001929*648.00415,
			basetorpor: 350.0,
			basetorporrate: -0.1*6.666,
			torporperlevel: 0.034285714,
			baseaffinity: 3000.0,
			affinityperlevel: 150.0,
			ineffectbyaff: 0.2,
			basefood: 'Rare Mushroom',
			foods: ['Rare Mushroom', 'Plant Species X Seed'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Pteranodon: {
			foodrate: -0.001543*216.029373,
			basetorpor: 120,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1200,
			affinityperlevel: 60,
			ineffectbyaff: 3.125,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Dodo',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Projectile": 1.5,
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Pulmonoscorpius: {
			foodrate: -0.001929*432.002777,
			basetorpor: 150,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1500,
			affinityperlevel: 75,
			ineffectbyaff: 6.15, //2.5 in devkit
			basefood: 'Spoiled Meat',
			foods: ['Spoiled Meat'],
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		Quetzalcoatlus: {
			foodrate: -0.0035*140.0,
			basetorpor: 1850.0,
			basetorporrate: -0.2*17,
			torporperlevel: 0.06,
			baseaffinity: 6850,
			affinityperlevel: 300,
			ineffectbyaff: 0.9375,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Rex',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Projectile": 1.2,
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Raptor: {
			foodrate: -0.001543*648.088135,
			basetorpor: 180,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1200,
			affinityperlevel: 60,
			ineffectbyaff: 3.125,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Parasaur',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Rex: {
			foodrate: -0.002314*180.063385,
			basetorpor: 1550,
			basetorporrate: -0.1*7.25,
			torporperlevel: 0.06,
			baseaffinity: 3450,
			affinityperlevel: 150,
			ineffectbyaff: 1.25,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Scorp',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Sabertooth: {
			foodrate: -0.001543*288.039185,
			basetorpor: 500,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 1200,
			affinityperlevel: 60,
			ineffectbyaff: 3.125,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Bronto',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Sarcosuchus: {
			foodrate: -0.001578*211.237854,
			basetorpor: 400,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 2000,
			affinityperlevel: 75,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Trike',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Spinosaurus: {
			foodrate: -0.002066*150.0,
			basetorpor: 850,
			basetorporrate: -0.1*21.333332,
			torporperlevel: 0.06,
			baseaffinity: 3200,
			affinityperlevel: 150,
			ineffectbyaff: 1.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Argent',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1
			}
		},

		Stegosaurus: {
			foodrate: -0.005341*208.034286,
			basetorpor: 500,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 6000,
			affinityperlevel: 300,
			ineffectbyaff: 0.1,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Sarco',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1,
				"Head": 1.67
			}
		},

		"Terror Bird": {
			foodrate: -0.001578*352.06308,
			basetorpor: 300,
			basetorporrate: -1.5*1.5,
			torporperlevel: 0.06,
			baseaffinity: 1600.0,
			affinityperlevel: 85.0,
			ineffectbyaff: 2.5,
			basefood: 'Raw Meat',
			foods: ['Raw Meat', 'Prime Meat', 'C/J Prime', 'Kibble-Generic'],
			kibble: 'Gallimimus',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8,
				"DmgType_Melee_Dino_Herbivore": 0.6
			},
			hitboxes: {
				"Body": 1,
				"Head": 3
			}
		},

		Triceratops: {
			foodrate: -0.003156*352.06308,
			basetorpor: 250,
			basetorporrate: -0.1*3,
			torporperlevel: 0.06,
			baseaffinity: 3000,
			affinityperlevel: 150,
			ineffectbyaff: 0.2,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Generic'],
			kibble: 'Carno',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		},

		"Woolly Rhino": {
			foodrate: -0.003156*150.0,
			basetorpor: 600.0,
			basetorporrate: -0.1*9.0,
			torporperlevel: 0.06,
			baseaffinity: 3450.0,
			affinityperlevel: 125.0,
			ineffectbyaff: 1.25,
			basefood: 'Mejoberry',
			foods: ['Mejoberry', 'Other Berry', 'Crop', 'Kibble-Bronto'],
			kibble: 'Terror Bird',
			tamingmethods: ['Standard'],
			damagemultipliers: {
				"DmgType_Melee_HighTorpidity_StoneWeapon": 0.66,
				"DmgType_Melee_Human": 0.8
			},
			hitboxes: {
				"Body": 1
			}
		}
	}

	$rootScope.pagetitle="ARK Taming Calculator";

	$scope.tablevisibility=$cookies.getObject('tablevisibility');
	if ($scope.tablevisibility==undefined || $scope.tablevisibility.version!="20160131") {
		$scope.tablevisibility={
			"version": "20160131",
			"Creature": true,
			"Food": true,
			"Tame": true,
			"Narcotics": false,
			"Starve": false,
			"Knockout": false
		}
	}

	$scope.showextratamedetails=$cookies.getObject("showextratamedetails");
	if ($scope.showextratamedetails==undefined) {
		$scope.showextratamedetails=0;
	}

	$scope.showanimations=$cookies.getObject("showanimations");
	if ($scope.showanimations==undefined) {
		$scope.showanimations=1;
	}
	$animate.enabled($scope.showanimations);

	$scope.showoldselects=$cookies.getObject("showoldselects");
	if ($scope.showoldselects==undefined) {
		$scope.showoldselects=0;
	}

	$scope.texponent=0.800403041; //0.829050872; //0.76593984; //0.827745067192723; //0.8107032;
	$scope.tcoefficient=22.39671632; //25.7837826; //18.62553525; //24.7933173692763; //21.93040668;
	$scope.basetamingmultiplier=2; //Hidden tame rate multiplier on official servers

	//Value relating to the creature being tamed
	$scope.creature=$cookies.getObject('creature');
	if ($scope.creature==undefined || !($scope.creature.name in $scope.creatures) || $scope.creature.version!="20170911") {
		$scope.creature={
			version: "20170911",
			searchname: "Ankylosaurus",
			name: "Ankylosaurus",
			level: 20,
			tamingmethod: "Standard",
			usertamingmultiplier: 1,
			tamingmultiplier: 2,
			foodratemultiplier: 1,
			totalfood: 0,
			suppliedaffinity: 0
		};
	}

	//Narcotics related constants for this creature/level
	$scope.narcotics={
		buffertime: 0,
		max: 0,
		min: 0,
		buffernarcotics:0,
		narcoticsbuffertime: 0,
		narcoticsmethod: "Narcotics"
	};

	//Narcotics related variables depending on creature's actual state
	$scope.narcoticstiming={
		start: new Date(),
		topupnarcotics: 0,
		currenttorpor: 0,
		time: false,
		intervalid: null,
		buffertime: 0,
		alarm: false,
		alarmthreshold: 10,
		narcoticsbuffertime: 0,
		narcoticstimes: {
			"Narcotics": 0,
			"Narcoberries": 0
		}
	};

	//Starve Timing Variables
	$scope.starvetiming={
		start: new Date(),
		maxfood: 0,
		currentfood: 0,
		time: false,
		intervalid: null,
		starvetime: 0,
		alarm: false,
		alarmthreshold: 10
	}

	//Knocking out related variables
	$scope.ko=$cookies.getObject("ko");
	if ($scope.ko==undefined || $scope.ko.version!="20160131") {
		$scope.ko={
			version: "20160131",
			koweapondam: 100,
			komeleedam: 100,
			searchkomethod: "Bow",
			komethod: "Bow",
			koquantities: {},
			kotimes: {},
			kotorpor: {},
			kodamage: {}
		}
	}

	$scope.showhidetable=function(table) {
		$scope.tablevisibility[table]=!$scope.tablevisibility[table];
		var now=new Date();
		$cookies.putObject('tablevisibility', $scope.tablevisibility, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});
	}

	$scope.showhideextratamedetails=function() {
		var now=new Date();
		$cookies.putObject('showextratamedetails', $scope.showextratamedetails, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});
	}

	$scope.showhideoldselects=function() {
		var now=new Date();
		$cookies.putObject('showoldselects', $scope.showoldselects, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});
	}

	$scope.showhideanimations=function() {
		var now=new Date();
		$animate.enabled($scope.showanimations);
		$cookies.putObject('showanimations', $scope.showanimations, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});
		if ($scope.showanimations==0) {
			alert("Refresh the page");
		}
	}

	$scope.filterFoods=function(item) {
		return ($scope.foodamounts[item]>0);
	}

	$scope.searchdino=function() {
		//alert("searchdino");
		var creature=$scope.creature;
		var creatures=$scope.creatures;

		if (creature.searchname in creatures) {
			creature.name=creature.searchname;
			$scope.selectdino();
		}
	}

	$scope.searchkomethod=function() {
		var ko=$scope.ko;
		var komethods=$scope.komethods;
		if (ko.searchkomethod in komethods) {
			ko.komethod=ko.searchkomethod;
			$scope.knockoutcalc();
		}
	}

	$scope.selectdino=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];

		creature.searchname=creature.name; //Ensure the searchname is kept up to date

		creature.suppliedaffinity=0;
		if (creaturedata.foods.indexOf(creature.fillfood) == -1 ) {
			creature.fillfood=creaturedata.foods[0];
		}
		if (creaturedata.tamingmethods.indexOf(creature.tamingmethod) == -1 ) {
			creature.tamingmethod=creaturedata.tamingmethods[0];
		}

		$scope.resetfoods();
		$scope.narcoticstiming.time=false;
		$scope.narcoticstimer();
		$scope.selectlevel();
	}

	$scope.selectlevel=function() {
		creature=$scope.creature;
		$rootScope.pagetitle=creature.level+" "+creature.name+" - Ark Taming Calculator";
		if (creature.level>2000) {
			creature.level=2000;
		}
		if (isNaN(creature.level) || creature.level<1) {
			return;
		}

		creaturedata=$scope.creatures[creature.name];
		creature.requiredaffinity=creaturedata.baseaffinity+creaturedata.affinityperlevel*creature.level;
		creature.torpor=creaturedata.basetorpor+creaturedata.basetorpor*creaturedata.torporperlevel*(creature.level-1);
		creature.torporrate=creaturedata.basetorporrate+Math.pow(creature.level-1,$scope.texponent)/($scope.tcoefficient/creaturedata.basetorporrate);
		var now = new Date();
		$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});
		$scope.maxfoodcalc();
		$scope.alltimescalc();
		$scope.foodcalc();
		$scope.knockoutcalc();
		$scope.starvetimingcalc();
	}

	$scope.settamingmethod=function() { //General purpose function-caller function for a few fields
		if ($scope.creature.tamingmultiplier>0 && $scope.creature.foodratemultiplier>0) { //Necessary to prevent endless loop
			var now = new Date();
			$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});

			$scope.creature.tamingmultiplier=$scope.creature.usertamingmultiplier*$scope.basetamingmultiplier;

			$scope.maxfoodcalc();
			$scope.foodcalc();
			$scope.alltimescalc();
		}
	}

	$scope.setFillFood=function(food) {
		$scope.foodamounts[$scope.creature.fillfood]=0;
		$scope.creature.fillfood=food;
		$scope.foodcalc();
	}

	$scope.resetfoods=function() {
		$scope.foodamounts={};
		for (var food in $scope.foods) {
			$scope.foodamounts[food]=0;
		}
	}

	$scope.maxfoodcalc=function() {
		$scope.maxfoodamounts={};

		if (creature.tamingmethod=="Standard") {

			for (var food in $scope.foods) {
				$scope.maxfoodamounts[food]=Math.ceil(creature.requiredaffinity/$scope.foods[food].affinity/creature.tamingmultiplier);
			}

		}

		if (creature.tamingmethod=="Non-Violent") {

			for (var food in $scope.foods) {
				$scope.maxfoodamounts[food]=Math.ceil(creature.requiredaffinity/$scope.foods[food].affinity/creature.tamingmultiplier/creaturedata.nonviolentfoodaffinitymultiplier);
			}

		}
	}

	$scope.alltimescalc=function() {
		$scope.times={};

		if ($scope.creature.tamingmethod=="Standard") {
			$scope.creature.foodrate=$scope.creatures[$scope.creature.name].foodrate*$scope.creature.foodratemultiplier;
		}
		if (creature.tamingmethod=="Non-Violent") {
			$scope.creature.foodrate=$scope.creatures[$scope.creature.name].foodrate*$scope.creature.foodratemultiplier*$scope.creatures[$scope.creature.name].nonviolentfoodratemultiplier;
		}

		for (var food in $scope.maxfoodamounts) {
			$scope.times[food]=$scope.maxfoodamounts[food]*-$scope.foods[food].food/$scope.creature.foodrate;
		}

	}

	$scope.foodcalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		foods=$scope.foods;
		foodamounts=$scope.foodamounts;
		affinity=0;
		food=0;
		foodamounts[creature.fillfood]=0;

		if (creature.tamingmethod=="Standard") {

			for (var i = 0; i < creaturedata.foods.length; i++) {
				
				affinity+=foods[creaturedata.foods[i]].affinity*creature.tamingmultiplier*foodamounts[creaturedata.foods[i]];
				food-=foods[creaturedata.foods[i]].food*foodamounts[creaturedata.foods[i]];
			}
			foodamounts[creature.fillfood]=Math.max(Math.ceil((creature.requiredaffinity-affinity)/foods[creature.fillfood].affinity/creature.tamingmultiplier),0);
			affinity+=foods[creature.fillfood].affinity*creature.tamingmultiplier*foodamounts[creature.fillfood];
			food-=foods[creature.fillfood].food*foodamounts[creature.fillfood];
			creature.totalfood=-food;
			creature.suppliedaffinity=affinity;

		}

		if (creature.tamingmethod=="Non-Violent") {

			for (var i = 0; i < creaturedata.foods.length; i++) {
				
				affinity+=foods[creaturedata.foods[i]].affinity*creature.tamingmultiplier*creaturedata.nonviolentfoodaffinitymultiplier*foodamounts[creaturedata.foods[i]];
				food-=foods[creaturedata.foods[i]].food*foodamounts[creaturedata.foods[i]];
			}
			foodamounts[creature.fillfood]=Math.max(Math.ceil((creature.requiredaffinity-affinity)/foods[creature.fillfood].affinity/creature.tamingmultiplier/creaturedata.nonviolentfoodaffinitymultiplier),0);
			affinity+=foods[creature.fillfood].affinity*creature.tamingmultiplier*creaturedata.nonviolentfoodaffinitymultiplier*foodamounts[creature.fillfood];
			food-=foods[creature.fillfood].food*foodamounts[creature.fillfood];
			creature.totalfood=-food;
			creature.suppliedaffinity=affinity;

		}		

		$scope.totaltimecalc();
		$scope.effectivenesscalc();
		$scope.starvetimingcalc();

	}

	$scope.totaltimecalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		if (creature.tamingmethod=="Standard") {
			$scope.totaltime=food/creaturedata.foodrate/creature.foodratemultiplier;
			$scope.narcoticscalc();
		}

		if (creature.tamingmethod=="Non-Violent") {
			$scope.totaltime=food/creaturedata.foodrate/creature.foodratemultiplier/creaturedata.nonviolentfoodratemultiplier;
		}
	}

	$scope.narcoticscalc=function() {
		var narcoticsmethod=$scope.narcoticsmethods[$scope.narcotics.narcoticsmethod];
		$scope.narcotics.buffertime=$scope.creature.torpor/-$scope.creature.torporrate;
		$scope.narcotics.max=Math.ceil($scope.totaltime*-$scope.creature.torporrate/(narcoticsmethod.torpor-$scope.creature.torporrate*narcoticsmethod.time));
		$scope.narcotics.min=Math.max(Math.ceil(($scope.totaltime*-$scope.creature.torporrate-$scope.creature.torpor)/(narcoticsmethod.torpor-$scope.creature.torporrate*narcoticsmethod.time)), 0);
		$scope.narcotics.buffernarcotics=Math.ceil($scope.creature.torpor/narcoticsmethod.torpor);
		$scope.narcotics.narcoticsbuffertime=narcoticsmethod.time*$scope.narcotics.buffernarcotics;
		if ($scope.narcoticstiming.time==false) {
			$scope.narcoticstiming.currenttorpor=$scope.creature.torpor;
		}
		$scope.narcoticstimingcalc();
	}

	$scope.narcoticstimingcalc=function() {
		var narcoticsmethod=$scope.narcoticsmethods[$scope.narcotics.narcoticsmethod];
		var narcoticstimes=$scope.narcoticstiming.narcoticstimes;
		$scope.narcoticstiming.currenttorpor=Math.min($scope.narcoticstiming.currenttorpor, $scope.creature.torpor);
		var suppliedtime=0;
		var suppliedtorpor=0;
		for (method in narcoticstimes) {
			if (!narcoticstimes.hasOwnProperty(method)) {
				continue;
			}
			if ($scope.narcoticstiming.currenttorpor+suppliedtorpor+(narcoticstimes[method]*narcoticsmethod.rate)>$scope.creature.torpor) {
				//Here we check if the current method brings us over the max possible torpor, and cut off the time if it does
				suppliedtime+=($scope.creature.torpor-$scope.narcoticstiming.currenttorpor+suppliedtorpor)/narcoticsmethod.rate;
				suppliedtorpor=$scope.creature.torpor-$scope.narcoticstiming.currenttorpor;
				break;
			} else {
				suppliedtime+=narcoticstimes[method];
				suppliedtorpor+=narcoticstimes[method]*narcoticsmethod.rate;
			}
		}
		$scope.narcoticstiming.topupnarcotics=Math.ceil(($scope.creature.torpor-$scope.narcoticstiming.currenttorpor-suppliedtorpor)/narcoticsmethod.torpor);
		$scope.narcoticstiming.buffertime=($scope.narcoticstiming.currenttorpor+suppliedtorpor)/-$scope.creature.torporrate;
		$scope.narcoticstiming.narcoticsbuffertime=suppliedtime;
	}

	$scope.supplynarcotic=function() {
		var narcoticsmethod=$scope.narcoticsmethods[$scope.narcotics.narcoticsmethod];
		var narcoticstimes=$scope.narcoticstiming.narcoticstimes;
		narcoticstimes[$scope.narcotics.narcoticsmethod]+=$scope.narcoticstiming.supplynarcoticamount*narcoticsmethod.time;
	}

	$scope.narcoticstimer=function() {
		var narcoticstimes=$scope.narcoticstiming.narcoticstimes;
		if ($scope.narcoticstiming.time==true) {
			$scope.narcoticstiming.intervalid=$interval(function() {
				var narcoticsapplied=false;
				for (method in narcoticstimes) {
					if (!narcoticstimes.hasOwnProperty(method)) {
						continue;
					}
					if (narcoticstimes[method]>0) {
						narcoticstimes[method]=Math.max(0, narcoticstimes[method]-1);
						$scope.narcoticstiming.currenttorpor+=$scope.narcoticsmethods[method].rate;
						if ($scope.narcoticstiming.currenttorpor>$scope.creature.torpor) {
							$scope.narcoticstiming.currenttorpor=$scope.creature.torpor;
							for (method in narcoticstimes) {
								narcoticstimes[method]=0;
							}
						}
						narcoticsapplied=true;
						break;
					}
				}
				if (!narcoticsapplied) {
					$scope.narcoticstiming.currenttorpor+=$scope.creature.torporrate;
				}
				$scope.narcoticstimingcalc();
				if ($scope.narcoticstiming.currenttorpor<=0) {
					$scope.narcoticstiming.currenttorpor=0;
					$scope.narcoticstimingcalc();
					$scope.narcoticstiming.time=false;
					$scope.narcoticstimer();
				}
				if ($scope.narcoticstiming.alarm==1 && $scope.narcoticstiming.buffertime/60<$scope.narcoticstiming.alarmthreshold) {
					$scope.narcoticstiming.alarm=0;
					var audio = new Audio('alarm.mp3');
					audio.volume=0.3;
					audio.play();
				}
			}, 1000);
		} else {
			$interval.cancel($scope.narcoticstiming.intervalid);
			$scope.narcoticstiming.intervalid=null;
		}
	}

	$scope.starvetimingcalc=function() {
		var timedfoodamount=Math.min($scope.creature.totalfood, $scope.starvetiming.maxfood); //We time either the total food required for tame or the max food the dino has, whichever is lower
		if ($scope.starvetiming.currentfood>$scope.starvetiming.maxfood) {
			scope.starvetiming.currentfood=$scope.starvetiming.maxfood;
		}
		$scope.starvetiming.starvetime=(timedfoodamount-($scope.starvetiming.maxfood-$scope.starvetiming.currentfood))/-$scope.creatures[$scope.creature.name].foodrate/$scope.creature.foodratemultiplier;
		$scope.starvetiming.starvetime=Math.max($scope.starvetiming.starvetime, 0); //We get a negative time if the target food has already been passed, replace with 0 instead
		$scope.starvetiming.tametime=($scope.creature.totalfood-($scope.starvetiming.maxfood-$scope.starvetiming.currentfood))/-$scope.creatures[$scope.creature.name].foodrate/$scope.creature.foodratemultiplier;
		$scope.starvetiming.tametime=Math.max($scope.starvetiming.tametime, 0); //We get a negative time if the target food has already been passed, replace with 0 instead
	}

	$scope.starvetimer=function() {
		if ($scope.starvetiming.time==true) {
			$scope.starvetiming.intervalid=$interval(function() {
				$scope.starvetiming.currentfood+=$scope.creatures[$scope.creature.name].foodrate*$scope.creature.foodratemultiplier;
				$scope.starvetimingcalc();
				/*if ($scope.starvetiming.currentfood<=0) {
					$scope.starvetiming.currentfood=0;
					$scope.starvetimingcalc();
					$scope.starvetiming.time=false;
					$scope.starvetimer();
				}*/
				if ($scope.starvetiming.alarm==1 && $scope.starvetiming.starvetime/60<$scope.starvetiming.alarmthreshold) {
					$scope.starvetiming.alarm=0;
					var audio = new Audio('alarm.mp3');
					audio.volume=0.3;
					audio.play();
				}
			}, 1000);
		} else {
			$interval.cancel($scope.starvetiming.intervalid);
			$scope.starvetiming.intervalid=null;
		}
	}

	$scope.effectivenesscalc=function() {
		var foods=$scope.foods;
		var foodamounts=$scope.foodamounts;
		var creature=$scope.creature;
		var creaturedata=$scope.creatures[creature.name];
		var effectiveness=100;
		var fedfood={};
		for (var food in $scope.foods) {
			fedfood[food]=0;
		}

		if (creature.tamingmethod=="Standard") {

			for (var i = 0; i < creaturedata.foods.length; i++) {
				var food=creaturedata.foods[i];
				while (fedfood[food]<foodamounts[food]) {
					fedfood[food]++;
					effectiveness-=Math.pow(effectiveness, 2)*creaturedata.ineffectbyaff/foods[food].affinity/creature.tamingmultiplier/100;
				}
			}

		}

		if (creature.tamingmethod=="Non-Violent") {

			for (var i = 0; i < creaturedata.foods.length; i++) {
				var food=creaturedata.foods[i];
				while (fedfood[food]<foodamounts[food]) {
					fedfood[food]++;
					effectiveness-=Math.pow(effectiveness, 2)*creaturedata.ineffectbyaff/foods[food].affinity/creature.tamingmultiplier/creaturedata.nonviolentfoodaffinitymultiplier/100;
				}
			}

		}
		creature.effectiveness=effectiveness;
		creature.extralevels=Math.floor(creature.level*0.5*creature.effectiveness/100);
	}

	$scope.knockoutcalc=function() {
		var komethod=$scope.komethods[$scope.ko.komethod];
		$scope.ko.koquantities={};

		$scope.ko.searchkomethod=$scope.ko.komethod; //Ensure the searchname is kept up to date

		for (hitbox in $scope.creatures[$scope.creature.name].hitboxes) {
			var torpor=komethod.torpor*$scope.creatures[$scope.creature.name].hitboxes[hitbox];
			var damage=komethod.damage*$scope.creatures[$scope.creature.name].hitboxes[hitbox];
			if (komethod.usesmeleedam) {
				torpor*=$scope.ko.komeleedam/100;
				damage*=$scope.ko.komeleedam/100;
			}
			if (komethod.usesweapondam) {
				torpor*=$scope.ko.koweapondam/100;
				damage*=$scope.ko.koweapondam/100;
			}
			for (i=0; i<komethod.damagetypes.length; i++) {
				if (komethod.damagetypes[i] in $scope.creatures[$scope.creature.name].damagemultipliers) {
					torpor*=$scope.creatures[$scope.creature.name].damagemultipliers[komethod.damagetypes[i]];
					damage*=$scope.creatures[$scope.creature.name].damagemultipliers[komethod.damagetypes[i]];
				}
			}
			$scope.ko.kotorpor[hitbox]=torpor;
			$scope.ko.kodamage[hitbox]=damage;
			$scope.ko.koquantities[hitbox]=Math.ceil($scope.creature.torpor/torpor);
			$scope.ko.kotimes[hitbox]=$scope.ko.koquantities[hitbox]*komethod.time;
		}

		var now = new Date();
		$cookies.putObject('ko', $scope.ko, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/taming'});

		/*for (hitbox in $scope.creatures[$scope.creature.name].hitboxes) {
			$scope.ko.koquantities[hitbox]=Math.ceil($scope.creature.torpor/$scope.komethodtorpor[$scope.ko.komethod]/$scope.creatures[$scope.creature.name].projectiledamage/$scope.ko.kodamagemultiplier/$scope.creatures[$scope.creature.name].hitboxes[hitbox]);
			$scope.ko.kotimes[hitbox]=$scope.ko.koquantities[hitbox]*5;
		}*/
		/*if ($scope.creatures[$scope.creature.name].projectiledamage>1 && "Head" in $scope.creatures[$scope.creature.name].hitboxes) {
			var headshots=$scope.ko.koquantities["Head"]-1;
			var bodyshots=$scope.ko.koquantities["Body"]-(headshots*$scope.creatures[$scope.creature.name].hitboxes["Head"]);
			$scope.ko.koquantities["Head+Body"]=headshots+"+"+bodyshots;
			$scope.ko.kotimes["Head+Body"]=(headshots+bodyshots)*5;
		}*/
	}

	$scope.resetfoods();
	$scope.selectdino();
	$scope.maxfoodcalc();
	$scope.alltimescalc();
	$scope.foodcalc();
	$rootScope.pagetitle="ARK Taming Calculator";

}]);