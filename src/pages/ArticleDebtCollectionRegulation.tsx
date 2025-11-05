import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticleBySlug } from "@/data/articles";

const ArticleDebtCollectionRegulation = () => {
  const article = getArticleBySlug("debt-collection-regulation");
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <ArticleTemplate article={article}>
      <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
        Kenya has come a long way in building a modern financial system. Banks have digitised, SACCOs are more sophisticated, digital credit has expanded access, and even conversations about NPL sales and secondary markets are starting to happen in boardrooms. But there's a weak link we've allowed to linger for too long: how we collect debt.
      </p>

      <p className="mb-6">
        On paper, we have regulated lenders and a growing credit culture. In practice, we still see borrowers being shamed through their relatives, data being pulled from places it shouldn't be, and lenders quietly outsourcing to agencies they know will "go further" than they themselves are allowed to. That gap between the regulated front end and the unregulated back end is what is now damaging trust — with consumers, with the courts, and with investors in the NPL space.
      </p>

      <p className="mb-12">
        So the question is no longer "should we regulate debt collection?" It's "how fast can we do it, and can we do it in a way that grows the market rather than chokes it?"
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">The Credibility Gap We Can No Longer Ignore</h2>
      
      <p className="mb-6">
        Right now, there is a mismatch. On one side, we have regulated lenders with policies, CBS systems, risk committees and product governance. On the other side, we have a debt collection industry that has not been fully brought under a formal supervisory framework, resulting in a mix of practices: operating without licensing or fit-and-proper checks, using illegal or grey-market data for skip tracing, engaging in harassment and third-party shaming that clearly violate Kenya's Data Protection Act, and increasingly, debt recovery issues being handled in the Small Claims Court because there is no standardised, market-wide system for resolving delinquencies.
      </p>

      <p className="mb-6">
        It is not that all collectors are bad. Many agencies in Kenya are trying to run ethical businesses. The problem is that the industry has no single, clear rulebook and no universal bar to entry. If anyone can start a "recovery firm" tomorrow, then even the good firms get dragged down by the bad actors. Lenders sometimes make it worse by quietly outsourcing to firms that they know will do things the lender cannot do directly. Everyone pretends not to see it, but borrowers do see it. So do regulators. So do investors.
      </p>

      <p className="mb-12">
        When that happens, you get defensive customers, more complaints to regulators and, ultimately, a perception that our credit market is growing faster than the rails underneath it.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">We Already Know Regulation Works</h2>
      
      <p className="mb-6">
        The good thing is we don't need to guess whether regulation would help. When the CBK finally moved to regulate digital credit providers in 2022, the problem was very similar: too many players, too little discipline, and collection practices that were frankly embarrassing for a country with a data protection law. CBK's move — plus ODPC's enforcement — changed the tone of that market. Abusive practices were outlawed, data scraping was banned, and lenders were told: "if you want to operate in this space, we must know you and you must follow rules."
      </p>

      <p className="mb-6">
        That experience is valuable for two reasons. First, it proves that Kenyan regulators can move decisively when market conduct threatens the public. Second, it shows that regulation does not kill genuine innovation. It filters it. The serious firms stay. The opportunistic ones leave. Consumers regain confidence. That is exactly what our wider debt collection ecosystem needs, with a very clear message to the market that Kenya wants a professionalised debt recovery industry, not a free-for-all.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">Why Regulation Matters Beyond Consumer Protection</h2>
      
      <p className="mb-6">
        It is easy to tell this story only from the borrower's side. People have been harassed. Some have had their privacy violated. Some have had children or employers called. That is all true, and it is reason enough to regulate.
      </p>

      <p className="mb-6">
        But as an industry, we should also tell the bigger, commercial story. Ethical, transparent collections unlock capital.
      </p>

      <p className="mb-6">
        When a bank knows that any arrears it outsources will be handled by a licensed, supervised party, it has more confidence to extend credit to marginal segments. When international NPL investors look at Kenya, one of the first things they assess is the enforceability and conduct of the recovery environment. Are there licensed and compliant servicers who can work those loans properly? Is data access legal? If the answer is yes, it gives investors the certainty they need to price risk and commit capital to work with lenders looking to offload their charged-off portfolios.
      </p>

      <p className="mb-6">
        A key point to note too is that where there is no industry framework, we're seeing more matters being pushed to the Small Claims Court — sometimes in bulk. That's a symptom of a system trying to create certainty by litigation. Courts then become a pressure tool instead of a fairness tool.
      </p>

      <p className="mb-6">
        A good collections framework would reverse that flow: early engagement, standard notices, ADR or mediated repayment arrangements, and only then recourse to the courts. That would automatically remove a lot of the weak, mass-filed claims we've seen from unregulated parties. Courts should not be doing the work that a regulated collections ecosystem ought to be doing.
      </p>

      <p className="mb-12">
        So regulation is not a cost. It is a market enabler. It makes our recovery ecosystem easier to model. It makes our debt portfolios investible. It makes our credit system more resilient and more grown-up.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">Fix The Data Problem The Right Way</h2>
      
      <p className="mb-6">
        Most of the ugliest collection stories in Kenya start with data. Where did they get my number? How did they find my sister? Why did they text my colleague? That is usually a sign that the collector did not have a proper, lawful source of information and went looking elsewhere.
      </p>

      <p className="mb-6">
        The irony is that Kenya actually has enough data to do collections properly. Credit bureaus can confirm exposure and sometimes updated contacts. Telcos can verify numbers. Utilities and financial institutions have transaction patterns that can help segment the ability to pay. What is missing is a framework that says who can access what, for what purpose, and with what audit trail.
      </p>

      <p className="mb-6">
        A modern framework would do four things.
      </p>

      <p className="mb-6">
        It would allow only licensed collection firms and accredited agents to access approved data sources. Not everyone. Only those who have met the bar.
      </p>

      <p className="mb-6">
        It would set purpose and retention rules. You can look up a contact to engage a borrower on arrears. You cannot keep scraping or reuse that data to embarrass them or market to them.
      </p>

      <p className="mb-6">
        It would criminalise the current grey practices — buying lists, scraping phonebooks, using insiders — because there would now be a legitimate route to get what you need.
      </p>

      <p className="mb-6">
        It would enable a robust NPL market, with investors able to tap into quality data from credit reference bureaus and other sources to conduct proper due diligence and valuation of portfolios. That helps lenders extract more value from charged-off portfolios while investors achieve the yields they are looking for, more predictably.
      </p>

      <p className="mb-12">
        That approach makes collections more effective because you reach the right person. It makes it more ethical because you do not drag in third parties unlawfully. And it makes it more investible because outside capital can see that Kenya does not tolerate data abuse.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">A Practical Playbook For Establishing A Regulatory Framework</h2>

      <p className="mb-6">
        <strong>Step 1: Start With A Proper Industry Map</strong><br />
        Before writing rules, know who is collecting in Kenya today. List bank panel agencies, law firms doing collections, SACCO-commissioned collectors, digital-lender collectors, even small "skip trace" outfits. Capture the common complaints at ODPC, CBK and in the courts. This gives regulators evidence of harm and shows where the real risks are. South Africa did this diagnostic work before tightening its regime under the Council for Debt Collectors, and it made their rules better targeted.
      </p>

      <p className="mb-6">
        The framework should cover:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
        <li>third-party debt collection companies</li>
        <li>in-house units that collect for more than one lender (so they behave like agencies)</li>
        <li>individual collection agents who talk to borrowers</li>
      </ul>

      <p className="mb-6">
        <strong>Step 2: Establish A Licensing And National Registry</strong><br />
        Kenya should ensure only registered agencies and accredited individuals operate in collections. Both must be listed in a public registry for easy verification by borrowers and courts before proceeding with cases. This one move alone eliminates a lot of shadow operators.
      </p>

      <p className="mb-6">
        <strong>Step 3: Require Certification And Ongoing Training For Agents</strong><br />
        Collection agents should be certified, as is common in markets like South Africa, India and parts of Europe. Kenya can adopt a similar approach by involving ADRA Kenya and establishing a core curriculum covering debt collection law, data protection, communication skills, vulnerability and hardship, and sector ethics. Ongoing CPD hours should be required. Certification promotes better conduct and assures lenders of agent competency.
      </p>

      <p className="mb-6">
        <strong>Step 4: Issue A Binding Kenyan Code Of Collection Conduct</strong><br />
        Borrow from places that have done this well. Be respectful, contact at reasonable times, do not mislead, do not contact third parties except in narrow circumstances, validate the debt when asked, and do not harass. Kenya doesn't have to reinvent the wheel. Localise it to our laws — especially the Data Protection Act — and make it enforceable. This turns "good practice" into "required practice."
      </p>

      <p className="mb-6">
        <strong>Step 5: Build A Lawful Data-Access Model So Collectors Don't Have To Break The Law</strong><br />
        One reason debt collectors in Kenya resort to dodgy data access for skip tracing is because they don't have a formal way to update contact details. Regulators can fix that. Allow licensed collectors controlled, audited access to data sources like credit bureau records and approved alternative data sources. Tie every access to a purpose and log it. At the same time, outlaw and penalise the current practice of unlawful access to consumer data for skip tracing. This is how you move the industry from "use whatever you can find" to "use what you are allowed to."
      </p>

      <p className="mb-6">
        <strong>Step 6: Bring ADRA Kenya In As A Supervised Self-Regulator</strong><br />
        Kenya already has an industry association. Give ADRA a formal role to run the certification courses for agents, host the code of conduct, take first-line complaints and recommend disciplinary measures. Regulators in other markets do this to good effect. It keeps the regulator at the steering wheel but lets the industry do some of the pedalling. CBK and the Data Commissioner can retain the power to suspend or delist actors, while ADRA handles training and day-to-day standards.
      </p>

      <p className="mb-6">
        <strong>Step 7: Create An Enforcement Ladder That Actually Bites</strong><br />
        Look at how South Africa's Council for Debt Collectors publishes sanctions. Kenya can do the same. Start with warnings for minor breaches, then fines, then licence suspension, then striking off for repeat or serious misconduct. Importantly, publish the names. Public sanctioning will make lenders think twice before hiring a non-compliant agency and will give borrowers confidence that complaining leads somewhere.
      </p>

      <p className="mb-12">
        <strong>Step 8: Monitor And Report Outcomes</strong><br />
        Whatever we set up should be measured. Number of licensed agencies. Number of accredited agents. Complaints by category (harassment, data misuse, mis-identification). Cases diverted to ADR. Small-claims cases involving unlicensed collectors. Publishing this quarterly sends two messages. To Kenyans: the space is finally being cleaned up. To NPL investors: the space is visible and predictable.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">Why This Also Speaks To International NPL Investors</h2>
      
      <p className="mb-6">
        International buyers of distressed loans want two things: predictability and professionalism. They want to know that if they buy a portfolio from a Kenyan bank, they can hand it to a licensed servicer who will collect in a lawful, reputationally safe way. They want to know that data access is legal, that consumers have rights, and that the regulator is awake.
      </p>

      <p className="mb-12">
        When that exists, they can price Kenyan portfolios more accurately. That means banks get better execution on NPL sales. That, in turn, frees up capital for new lending. So regulation here is not a cost — it's an enabler.
      </p>

      <h2 className="text-2xl font-bold mb-6 mt-12">A Credible Market That Benefits All</h2>
      
      <p className="mb-6">
        The payoff from these reforms would be immense. Consumers would gain from a marketplace where credit is more accessible — because lenders are more confident they can recover loans — yet also more humane, because falling behind doesn't mean being hounded or shamed without recourse. Lenders, for their part, would see improved recovery rates and lower write-offs once a professional framework is in place, meaning they can price loans more affordably and extend credit to more people.
      </p>

      <p className="mb-6">
        Regulators and policymakers would fulfil a core mandate: ensuring that finance serves the public good, bolstering stability and fairness in equal measure. And not least, Kenya's standing in international financial circles would rise. Proper debt collection governance, often an unsung pillar of financial reform, can be the factor that attracts foreign investment into Kenyan NPL portfolios and partnerships. Global investors seek yield, and many are keen on emerging markets — but they will only commit when they trust the rules of the game. By demonstrating that Kenya can enforce those rules and protect the integrity of its credit market, we invite those investors in rather than scare them off.
      </p>

      <p className="mb-6">
        In an era where credit underpins economic opportunity, Kenya cannot afford to let archaic debt collection practices sabotage progress. The country has already blazed a trail in financial innovation — from mobile money to digital lending — and shown a willingness to rein in excesses when needed. Now, it's time to complete the picture with debt collection reforms that marry innovation with integrity.
      </p>

      <p className="mb-6">
        It's not about stopping collections. It's about doing them in a way that protects dignity, protects lenders and attracts capital.
      </p>

      <p className="mb-12">
        That's the reckoning — and the opportunity.
      </p>
    </ArticleTemplate>
  );
};

export default ArticleDebtCollectionRegulation;
