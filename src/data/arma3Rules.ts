export interface RuleSection {
  title: string;
  content: string;
}

export interface RulesData {
  game: string;
  sections: RuleSection[];
}

export const arma3RulesData = {
  game: 'arma3',
  sections: [
    {
      title: "Standard Procedures",
      content: `
        <div class="space-y-6 text-gray-100">
          <h3 class="text-2xl font-bold text-white mb-4">General Guidelines</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Every complaint, request, or idea should go through the battalion form</li>
            <li>Mission feedback should be submitted through the battalion form</li>
            <li>Rules and gear restrictions are enforced by all Staff members</li>
          </ul>

          <h3 class="text-2xl font-bold text-white mt-8 mb-4">Field Leadership</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Overall mission planning is done before the NCO meeting</li>
            <li>The overall battle plan is marked out on the CP for everyone to see</li>
            <li>Monthly FL meetings are in place to discuss improvements</li>
          </ul>
        </div>
      `
    },
    {
      title: "Gear Restrictions",
      content: `
        <div class="space-y-6 text-gray-100">
          <h3 class="text-2xl font-bold text-white mb-4">General Guidance</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Members must suit their weapons to their role unless specified otherwise</li>
            <li>Only gear available in the arsenal is to be used on standard operations</li>
            <li>Battalion uniform applies to ALL MEMBERS</li>
            <li>No Thermal NVG's or Thermal Weapon Scopes</li>
            <li>SL, FL, RTO use Laser Designators</li>
            <li>Long Range Radios to be carried by SL, FL, RTO</li>
          </ul>

          <h3 class="text-2xl font-bold text-white mt-8 mb-4">Available Camo Types</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Alpine (Snowy Terrains)</li>
            <li>AOR1 (Arid/Desert Terrains)</li>
            <li>Multicam (Variety, Most urban Terrains)</li>
            <li>Multicam Tropic (Lush Forest, Jungle Terrains)</li>
            <li>Multicam Black (Night Ops)</li>
          </ul>
        </div>
      `
    },
    {
      title: "Badge Requirements",
      content: `
        <div class="space-y-6 text-gray-100">
          <h3 class="text-2xl font-bold text-white mb-4">Basic Requirements</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Basic Training</li>
            <li>In-Game Bootcamp Tab</li>
            <li>Medical Basic</li>
            <li>Grenadier Basic</li>
            <li>Radio Tab</li>
            <li>Airborne Tab</li>
          </ul>

          <h3 class="text-2xl font-bold text-white mt-8 mb-4">Leadership Requirements</h3>
          <ul class="list-disc pl-6 space-y-3">
            <li>Leadership Expert</li>
            <li>Scouting Advanced</li>
            <li>JTAC Tab</li>
            <li>Support Weapons Expert</li>
            <li>Medical Advanced</li>
          </ul>
        </div>
      `
    }
  ]
}; 