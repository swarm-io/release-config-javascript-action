module.exports = {
    "branches": [
        "main"
    ],
    "ci": false,
    "plugins": [
        ["@semantic-release/exec", {
            "prepareCmd": "majorTag=v$(echo ${nextRelease.version} | grep -o '[^-]*$' | cut -d. -f1) && git tag -d $majorTag || true && git push -d origin $majorTag || true && git tag $majorTag"
        }],
        ["@semantic-release/commit-analyzer", {
            "preset":  "conventionalcommits",
            "releaseRules": [
                {"scope": "no-release", "release": false}
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/npm", {
            "npmPublish": false
        }],
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md", "README.md", "package.json"],
            "message": "semantic-release-bot chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
        }],
        "@semantic-release/github"
    ]
}