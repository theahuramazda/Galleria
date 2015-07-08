using System.Web;
using System.Web.Optimization;

namespace Galleria.Web
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			/* JavaScript bundles */
			bundles.Add(new ScriptBundle("~/scripts/angular").Include("~/Scripts/angular*"));


			/* CSS/Style bundles */
			bundles.Add(new StyleBundle("~/styles/").Include("~/styles/*.css"));
		}
	}
}
