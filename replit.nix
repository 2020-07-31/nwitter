{ pkgs }: {
	deps = [
		pkgs.nodejs
  pkgs.import "firebase/compat/auth";
  pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}