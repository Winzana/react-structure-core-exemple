install-all:
	yarn install && node_modules/.bin/lerna bootstrap && cd core && yarn build && yarn link && cd ../web && yarn link core && cd ../
build-core:
	cd core && yarn build
build-web:
	@make build-core
	cd web && yarn build
build-ios:
	xcodebuild -project mobile/ios/mobile.xcodeproj -scheme mobile-release -archivePath mobile/ios/mobile.xcarchive archive
	xcodebuild -exportArchive -archivePath mobile/ios/mobile.xcarchive archive -exportPath ~/Downloads -exportOptionsPlist mobile/ios/mobile/ExportOptions.plist
build-android:
	cd mobile/android && ./gradlew assembleRelease